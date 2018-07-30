import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import signin from '@/components/signin/signin'
import signin2 from '@/components/signin2/signin2'
import message from '@/components/message/message'
import phone from '@/components/phone/phone'
import register from '@/components/register/register'
Vue.use(Router)

// const search = (resolve) => {
//   import('@components/search/search').then((module) => {
//     resolve(module)
//   })
// }

export default new Router({
  routes: [
    {
      title: '登录前我的页面',
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      title: '登录后我的页面',
      path: '/signin2',
      name: 'signin2',
      component: signin2
    },
    {
      title: '手机号登录页面',
      path: '/phone',
      name: 'phone',
      component: phone
    },
    {
      title: '短信验证码登录页面',
      path: '/message',
      name: 'message',
      component: message
    },
    {
      title: '注册页面',
      path: '/register',
      name: 'register',
      component: register
    }

  ]
})
