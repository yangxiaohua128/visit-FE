import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import search from '@/components/search/search'
import signin from '@/components/signin/signin'
Vue.use(Router)

// const search = (resolve) => {
//   import('@components/search/search').then((module) => {
//     resolve(module)
//   })
// }

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      title: '搜索页',
      path: '/search',
      name: 'search',
      component: search
    },
    {
      title: '登录前我的页面',
      path: '/signin',
      name: 'signin',
      component: signin
    }
  ]
})
