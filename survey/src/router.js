import Vue from 'vue'
import Router from 'vue-router'

// import Login from '@/views/login/Login'

import login from '@/views/login/Login'
import welcome from '@/views/welcome/Welcome'
import binfo from '@/views/binfo/Binfo'
import finish from '@/views/finish/Finish'
import question from '@/views/question/Question'
import done from '@/views/done/Done'


Vue.use(Router)

export default new Router({
  base: '/',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      meta: { index: 0 }
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome,
      meta: { index: 1 }
    },
    {
      path: '/binfo',
      name: 'binfo',
      component: binfo,
      meta: { index: 2 }
    },
    {
      path: '/question',
      name: 'question',
      component: question,
      meta: { index: 3 }
    },
    {
      path: '/done',
      name: 'done',
      component: done,
      meta: { index: 4 }
    }, 
    {
      path: '/finish',
      name: 'finish',
      component: finish,
      meta: { index: 5 }
    },
  ]
})
