import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import Vue from 'vue'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
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
