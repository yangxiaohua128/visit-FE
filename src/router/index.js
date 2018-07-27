import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import order from '@/components/order/order'
import orderconfirmation from '@/components/orderconfirmation/orderconfirmation'
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
      title: '预定页',
      path: '/order',
      name: 'order',
      component: order
    },
    {
      title: '确定页',
      path: '/orderconfirmation',
      name: 'orderconfirmation',
      component: orderconfirmation
    }
  ]
})
