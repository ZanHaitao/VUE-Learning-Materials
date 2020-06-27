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
    component: () => import('./views/Student.vue'),
    beforeEnter: (to, from, next) => {
      console.log('beforeEnter');
      next();
    }
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
    // component: () => import('./views/Learn.vue')
    components: {
      default: () => import('./views/Learn.vue'),
      student: () => import('./views/Student.vue')
    }
  },
  {
    path: '/question/:id',
    name: 'question',
    props: true,
    component: () => import('./views/Question.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  console.log('beforeEach');
  // console.log(to);
  // console.log(from);
  // if (to.path === "/student") {
  //   next('/about')
  // } else {
  //   next();
  // }
  next();
})

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve');
  next();
})

router.afterEach((to, from) => {
  console.log('afterEach');
})

export default router;