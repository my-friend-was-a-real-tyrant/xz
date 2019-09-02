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
      path: '/sm',
      name: 'SystemMessage',
      component: () => import('./views/SystemMessage.vue')
    },
    {
      path: '/ar',
      name: 'AdoptRecord',
      component: () => import('./views/AdoptRecord.vue')
    },
    {
      path: '/rr',
      name: 'ReservationRecord',
      component: () => import('./views/ReservationRecord.vue')
    },
    {
      path: '/tr',
      name: 'TransferRecord',
      component: () => import('./views/TransferRecord.vue')
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
      path: '/password',
      name: 'password',
      component: () => import('./views/set-password.vue')
    },
    {
      path: '/bst',
      name: 'bst',
      component: () => import('./views/bst.vue')
    },
    {
      path: '/jifen',
      name: 'jifen',
      component: () => import('./views/jifen.vue')
    },
    {
      path: '/setPay',
      name: 'setPay',
      component: () => import('./views/set-pay.vue')
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
