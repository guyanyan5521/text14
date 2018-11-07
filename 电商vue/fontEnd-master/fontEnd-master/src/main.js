// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import VueLazyload from 'vue-lazyload'
import VDistpicker from 'v-distpicker'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueTouch from 'vue-touch'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './vuex/store'

require('./assets/js/rem.js')
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false


Vue.use(VueTouch,{name:'v-touch'})
//use custom directive
Vue.use(VueLazyload)

// use options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://gw.alicdn.com/tps/i1/TB147JCLFXXXXc1XVXXxGsw1VXX-112-168.png',
  loading: 'https://gw.alicdn.com/tps/i1/TB147JCLFXXXXc1XVXXxGsw1VXX-112-168.png',
  attempt: 1
})

Vue.component('v-distpicker',VDistpicker);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
