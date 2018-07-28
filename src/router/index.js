import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ordermanagement from '@/components/ordermanagement/ordermanagement'
import informChange from '@/components/informChange/informChange'
import order from '@/components/order/order'
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
    }
  ]
})
