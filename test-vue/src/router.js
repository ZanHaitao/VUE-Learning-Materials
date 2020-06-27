import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue'
import Auth from './utils/auth'

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
  },
  {
    path: '/about',
    component: () => import('./views/About.vue'),
    meta: {
      requiredLogin: true
    }
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
    ],
    meta: {
      requiredLogin: true
    }
  },
  {
    path: '/learn',
    components: {
      default: () => import('./views/Learn.vue'),
      student: () => import('./views/Student.vue')
    }
  },
  {
    path: '/question/:id',
    name: 'question',
    props: true,
    component: () => import('./views/Question.vue'),
    meta: {
      isConfirm: true
    }
  },
  {
    path: '/login',
    component: () => import('./views/Login.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  const isRequiredLogin = to.matched.some(item => item.meta.requiredLogin);
  const isConfirm = from.meta.isConfirm && !to.meta.isConfirm;

  if (isRequiredLogin || isConfirm) {
    if (isConfirm) {
      const isLeave = confirm('是否确认离开当前页面？');
      isLeave ? next() : next(false);
      return;
    }

    if (!Auth.isLogin() && isRequiredLogin) {
      const isGoLogin = confirm('您当前未进行登陆无法访问！是否前往登陆？');
      isGoLogin ? next('/login') : next(false)
    } else {
      next();
    }

  } else {
    next();
  }

})


export default router;