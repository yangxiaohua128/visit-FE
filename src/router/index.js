import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import search from '@/components/search/search'
import apppage from '@/components/apppage/apppage'
import News from '@/components/News/News'
import history from '@/components/history/history'
import destination from '@/components/destination/destination'
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
      title: '首页',
      path: '/apppage',
      name: 'apppage',
      component: apppage
    },
    {
      title: '消息页',
      path: '/News',
      name: 'News',
      component: News
    },
    {
      title: '目的地',
      path: '/destination',
      name: 'destination',
      component: destination
    },
    {
      title: '浏览历史页',
      path: '/history',
      name: 'history',
      component: history
    },
  ]
})


