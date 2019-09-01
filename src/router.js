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
      path: '/os',
      name: 'OnlineService',
      component: () => import('./views/OnlineService.vue')
    },
    {
      path: '/wo',
      name: 'WorkOrder',
      component: () => import('./views/WorkOrder.vue')
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
      path: '/myCard',
      name: 'myCard',
      component:  () => import('./views/myCard.vue')
    },
    {
      path:'*',
      redirect: Home
    }
  ]
})
