/**
 * Vue插件：$http v1.0
 * 依赖axios，https://github.com/axios/axios
 */

import promise from 'es6-promise'
import axios from 'axios'

promise.polyfill()

// PLUGIN NAME
const pluginName = '$http'
const plugin = {}

function init (options) {
  // 创建实例
  const http = axios.create({
    baseURL: options && options.baseURL ? options.baseURL : '',
    timeout: 20000
    // withCredentials: true
  })
  // 请求拦截器
  http.interceptors.request.use(
    config => {
      const schoolData = JSON.parse(localStorage.getItem('schoolData'))
      // 如果是post，设置content-type
      if (config.method === 'post') {
        // config.data = qs.stringify(config.data)
        // config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
        // config.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
      }
      if (schoolData && schoolData.api_token) {
        config.headers.Authorization = 'Bearer ' + schoolData.api_token
      }
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  // 响应拦截器
  http.interceptors.response.use(
    response => {
      return response.data
    },
    error => {
      return Promise.reject(error)
    }
  )

  return http
}

// install
plugin.install = (Vue, options) => {
  // 添加Vue的实例方法
  Object.defineProperty(Vue.prototype, pluginName, { value: init(options) })
}

// 默认导出，作为Vue插件
export default plugin

// 独立使用，不作为Vue插件
export function _http (options) {
  return init(options)
}
