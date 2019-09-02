import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ServiceCenter from './views/ServiceCenter.vue'
import MyWallet from './views/MyWallet.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sc',
      name: 'serviceCenter',
      component: ServiceCenter
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/mw',
      name: 'myWallet',
      component: MyWallet
    },
    {
<<<<<<< HEAD
      path: '/password',
      name: 'password',
      component: () => import('./views/set-password.vue')
    },
    {
      path: '/bst',
      name: 'bst',
      component: () => import('./views/bst.vue')
=======
      path: '/myCard',
      name: 'myCard',
      component:  () => import('./views/myCard.vue')
>>>>>>> f87180cb463a8409d4c94e92f98a706f55c9cf9c
    },
    {
      path:'*',
      redirect: Home
    }
  ]
})
