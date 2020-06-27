import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    // alias: '/',
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
    component: () => import(/* webpackChunkName:"activity" */'./views/Activity.vue'),
    redirect: { name: 'academic' },
    children: [
      {
        path: 'academic',
        name: 'academic',
        component: () => import(/* webpackChunkName:"activity" */'./views/Academic.vue')
      },
      {
        path: 'personal',
        name: 'personal',
        component: () => import('./views/Personal.vue')
      },
      {
        path: 'download',
        name: 'download',
        component: () => import('./views/Download.vue')
      },
    ]
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