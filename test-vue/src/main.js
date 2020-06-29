import Vue from 'vue'
import App from './App.vue'
import 'animate.css'
import 'velocity-animate'
import router from './router'
import './assets/reset.css'
import axios from './http'
import store from './Store'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
