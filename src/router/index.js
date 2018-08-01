import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import orderPage from '@/components/orderPage/orderPage'
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
import ordermanagement from '@/components/ordermanagement/ordermanagement'
import informChange from '@/components/informChange/informChange'
import waitpay from '@/components/waitpay/waitpay'
import order from '@/components/order/order'
import orderconfirmation from '@/components/orderconfirmation/orderconfirmation'
import message from '@/components/message/message'
import showOne from '@/components/showOne/showOne'
import position from '@/components/position/position'
Vue.use(Router)
// const advancedSearch = (resolve) => {
//   import('@/components/advancedSearch/advancedSearch').then((module) => {
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
      title: '浏览历史',
      path: '/history',
      name: 'history',
      component: history
    },
    {
      tille: '选择定位',
      path: '/position',
      name: 'position',
      component: position
    },

    {path: '/advancedSearch',
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
    { path: '/userEvaluation',
      name: 'userEvaluation',
      component: userEvaluation
    },
    {title: '修改',
      path: '/userEvaluation',
      name: 'userEvaluation',
      component: userEvaluation
    },
    {
      title: '登录前我的页面',
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      title: '修改',
      path: '/informChange',
      name: 'informChange',
      component: informChange
    },
    {
      title: '全部订单',
      path: '/ordermanagement',
      name: 'ordermanagement',
      component: ordermanagement
    },
    {
      title: '单个订单',
      path: '/order',
      name: 'order',
      component: order
    },
    {
      title: '待支付',
      path: '/waitpay',
      name: 'waitpay',
      component: waitpay
    },
    { title: '预定页',
      path: '/orderPage',
      name: 'orderPage',
      component: orderPage
    },
    {
      title: '确定页',
      path: '/orderconfirmation',
      name: 'orderconfirmation',
      component: orderconfirmation
    },
    {
      title: '信息页',
      path: '/message',
      name: 'message',
      component: message
    },
    {
      title: '单个产品展示',
      path: '/showOne',
      name: 'showOne',
      component: showOne
    }
  ]
})
