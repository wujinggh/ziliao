/**
 * Vue插件：api v1.0
 * ajax获取api接口数据，并缓存到store
 * 依赖http.js、store
 * Vue.use()的设置项：
 * {
 *   // 必要项
 *   store,
 *   // 可选项，返回数据的缓存条件
 *   // 假如定义了code:0，那么只有response.code===0时，才会缓存本次返回的数据
 *   responseCacheCondition: {
 *     code: 0
 *   },
 *   // 可选项，设置axios的配置项
 *   // 例如设置baseURL，可区分生产环境和开发环境
 *   axiosConfig: {
 *     baseURL: process.env.NODE_ENV === 'production' ? 'http://www.yishengya.cn/' : 'http://192.168.1.144/'
 *   }
 * }
 * 组件内使用方法：
 * get请求: this.$api.get(接口地址, config)
 * post请求: this.$api.post(接口地址, 提交数据，config)
 * 删除缓存数据: this.$api.delete(接口地址)
 * config另加了一个参数：
 * cache: [true|false]，默认为true，是否缓存返回数据，仅对get方法有效
 */

import { _http } from './http'
import { deepCopy, isObject, isObjectValueEqual } from './util'

// PLUGIN NAME
const pluginName = '$api'
const plugin = {}

// 对象extend，仅仅是浅拷贝
function extend () {
  var target = arguments[0] || {}
  for (var i = 1; i < arguments.length; i++) {
    for (var prop in arguments[i]) {
      target[prop] = arguments[i][prop]
    }
  }
  return target
}

function init (Vue, options) {
  const store = options.store
  const http = _http(options.axiosConfig)

  // 缓存返回数据所需要符合的条件
  // 假如options.responseCacheCondition为{code: 0}，那么只有response.code===0时，才会缓存返回的数据
  const condition = []
  if (options.responseCacheCondition && isObject(options.responseCacheCondition) && Object.keys(options.responseCacheCondition).length > 0) {
    // 只允许一个条件
    for (let key in options.responseCacheCondition) {
      condition[0] = key
      condition[1] = options.responseCacheCondition[key]
      break
    }
  }

  // CLASS DEFINITION
  function Api () {}

  // get请求
  Api.prototype.get = function (...args) {
    return this.ajax('get', args[0], args[1])
  }

  // post请求
  Api.prototype.post = function (...args) {
    let config
    let postData
    // 早期的一些页面的写法，将post data写到了args[1].params里面，所以在这里做一下转换
    if (args[1] && args[1].params && !args[2]) {
      postData = args[1].params
      delete args[1].params
      config = args[1]
    } else {
      postData = args[1]
      config = args[2]
    }
    return this.ajax('post', args[0], config, postData)
  }

  // 删除缓存数据
  Api.prototype.delete = function (...args) {
    return this.ajax('delete', args[0])
  }

  // 发起ajax请求
  Api.prototype.ajax = function (method, url, config, postData) {
    if (!config) config = {}
    if (!config.headers) config.headers = {}

    // store模块命名
    const namespace = 'api.' + url

    // 如果store模块不存在，动态注册
    if (!store.state[namespace]) {
      this.createStoreModule(namespace)
    }

    // 如果是delete方法，删除缓存数据
    if (method === 'delete') {
      return new Promise((resolve, reject) => {
        store.commit(namespace, {
          params: undefined,
          response: undefined
        })
        resolve()
      })
    }

    // 是否缓存数据
    const cache = typeof config.cache === 'boolean' ? config.cache : true
    delete config.cache

    // 如果是get方法，且cache是true，且params相同，且已有数据缓存，从store读取
    if (method.toLowerCase() === 'get' &&
      cache &&
      ((store.state[namespace].params === undefined && config.params === undefined) || (isObject(store.state[namespace].params) && isObject(config.params) && isObjectValueEqual(store.state[namespace].params, config.params))) &&
      store.state[namespace].response) {
      return new Promise((resolve) => {
        resolve(store.state[namespace].response)
      })
    }

    // 添加headers.Authorization
    extend(config.headers, {
      // 'Authorization': 'Bearer ' + store.state.user.access_token
      'Authorization': 'Bearer ' + '9ace4857-bb97-3f50-95d8-07c1fa0cfd6b'
    })

    // 其它情况，dispatch
    return store.dispatch(namespace, {
      method,
      url,
      config: config,
      postData
    })
  }

  // 动态注册store模块
  // 注意：嵌套模块注册会报错，所以下面这一行的写法暂时不能用（版本vue-2.5.2, vuex-3.0.1）
  // store.registerModule(['api', url], { ... }
  Api.prototype.createStoreModule = function (namespace) {
    store.registerModule(namespace, {
      state: {
        params: undefined,
        response: undefined
      },
      actions: {
        [namespace] ({ commit }, payload) {
          return new Promise((resolve, reject) => {
            // get
            if (payload.method === 'get') {
              http.get(payload.url, payload.config)
                .then((response) => {
                  // 返回数据符合符合条件时，写入store
                  if (!condition.length || (condition.length && response[condition[0]] === condition[1])) {
                    commit(namespace, {
                      params: deepCopy(payload.config.params),
                      response: deepCopy(response)
                    })
                  }
                  resolve(response)
                  // 登录过期
                  // if (response.code === 2) {
                  //   store.commit('GLogout/TOGGLE_VISIBLE', true)
                  //   reject(new Error('登录过期(2)'))
                  // } else {
                  //   // 返回数据符合符合条件时，写入store
                  //   if (!condition.length || (condition.length && response[condition[0]] === condition[1])) {
                  //     commit(namespace, {
                  //       params: deepCopy(payload.config.params),
                  //       response: deepCopy(response)
                  //     })
                  //   }
                  //   resolve(response)
                  // }
                })
                .catch((error) => {
                  if (error.message !== 'canceled') reject(error)
                })
            } else if (payload.method === 'post') { // post
              http.post(payload.url, payload.postData, payload.config)
                .then((response) => {
                  resolve(response)
                })
                .catch((error) => {
                  if (error.message !== 'canceled') reject(error)
                })
            }
          })
        }
      },
      mutations: {
        [namespace] (state, payload) {
          state.params = payload.params
          state.response = payload.response
        }
      }
    })
  }

  return new Api()
}

// install
plugin.install = (Vue, options) => {
  // 添加Vue的实例方法
  Object.defineProperty(Vue.prototype, pluginName, { value: init(Vue, options) })
}

export default plugin
