import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import Vue from 'vue'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
// 前端解决跨域问题
axios.defaults.withCredentials = true
Vue.prototype.$ajax = axios
Vue.use(VueAwesomeSwiper)
// vue.config.productionTip = false;
router.push('apppage')
let vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Vue.use({
  vm
})
