import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import advancedSearch from '@/components/advancedSearch/advancedSearch'
import searchResults from '@/components/searchResults/searchResults'
// import userAlbum from '@/components/userAlbum/userAlbum'
// import userComment from '@/components/userComment/userComment'
// import userEvaluation from '@/components/userEvaluation/userEvaluation'
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

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/advancedSearch',
      name: 'advancedSearch',
      component: advancedSearch
    },
    {
      path: '/searchResults',
      name: 'searchResults',
      component: searchResults
    }
    // {
    //   path: '/userAlbum',
    //   name: 'userAlbum',
    //   component: userAlbum
    // },
    // {
    //   path: '/userComment',
    //   name: 'userComment',
    //   component: userComment
    // },
    // {
    //   path: '/userEvaluation',
    //   name: 'userEvaluation',
    //   component: userEvaluation
    // }
  ]
})
