import Vue from 'vue';
// import VueRouter from 'vue-router';
import VueRouter from './VueRouter';


import Home from './views/Home.vue'
// import Student from './views/Student.vue'
// import About from './views/About.vue'
// import Activity from './views/Activity.vue'
// import Learn from './views/Learn.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/student',
    component: () => import('./views/Student.vue')
  },
  {
    path: '/about',
    component: () => import('./views/About.vue')
  },
  {
    path: '/activity',
    component: () => import('./views/Activity.vue')
  },
  {
    path: '/learn',
    component: () => import('./views/Learn.vue')
  },
]

export default new VueRouter({
  routes,
  mode: 'history'
});