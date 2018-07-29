import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import search from '@/components/search/search'
import apppage from '@/components/apppage/apppage'
import News from '@/components/News/News'
import history from '@/components/history/history'
import destination from '@/components/destination/destination'
import advancedSearch from '@/components/advancedSearch/advancedSearch'
import searchResults from '@/components/searchResults/searchResults'
import userAlbum from '@/components/userAlbum/userAlbum'
import userComment from '@/components/userComment/userComment'
import userEvaluation from '@/components/userEvaluation/userEvaluation'
import signin from '@/components/signin/signin'
Vue.use(Router)
// const advancedSearch = (resolve) => {
//   import('@/components/advancedSearch/advancedSearch').then((module) => {
//     resolve(module)
//   })
// }

// const searchResults = (resolve) => {
//   import('@/components/searchResults/searchResults').then((module) => {
//     resolve(module)
//   })
// }
//
// const userAlbum = (resolve) => {
//   import('@/components/userAlbum/userAlbum').then((module) => {
//     resolve(module)
//   })
// }
//
// const userComment = (resolve) => {
//   import('@/components/userComment/userComment').then((module) => {
//     resolve(module)
//   })
// }
//
// const userEvaluation = (resolve) => {
//   import('@/components/userEvaluation/userEvaluation').then((module) => {
//     resolve(module)
//   })
// }

// const search = (resolve) => {
//   import('@components/search/search').then((module) => {
//     resolve(module)
//   })
// }

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
      path: '/advancedSearch',
      name: 'advancedSearch',
      component: advancedSearch
    },
    {
      path: '/searchResults',
      name: 'searchResults',
      component: searchResults
    },
    {
      path: '/userAlbum',
      name: 'userAlbum',
      component: userAlbum
    },
    {
      path: '/userComment',
      name: 'userComment',
      component: userComment
    },
    {
       path: '/userEvaluation',
         name:'userEvaluation',
      component:userEvaluation
    },
    {
      title: '登录前我的页面',
      path: '/signin',
      name: 'signin',
      component: signin
    }
  ]
})


