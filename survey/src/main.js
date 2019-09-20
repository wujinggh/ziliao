import Vue from 'vue'
import App from './App.vue'
import router from './router'

// reset
import '@/assets/css/reset.less'

// scaffolding
import '@/assets/css/scaffolding.less'
import  _http  from '@/plugin/http'

Vue.use(_http, {
  baseURL: process.env.NODE_ENV === 'production' ? 'http://wenjuan.ieicexpo.com' : 'http://dev.wenjuan.ieicexpo.com:913'
})

Vue.config.productionTip = false

router.beforeEach((to,from,next) => {
  let routerFlag = sessionStorage.getItem('routerFlag')
  if (routerFlag){
    next()
  }else{
    sessionStorage.setItem('routerFlag','1')
    next('/')
  }
  
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
