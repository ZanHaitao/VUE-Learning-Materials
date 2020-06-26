import Vue from 'vue'
import App from './App.vue'
import 'animate.css'
import 'velocity-animate'
import router from './router'
import './assets/reset.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
