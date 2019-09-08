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
      path: '/shim',
      name: 'shim',
      component: () => import('./views/shim.vue')
    },
    {
      path: '/invite',
      name: 'invite',
      component: () => import('./views/invite.vue')
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
      path: '/ra',
      name: 'RecordArticle',
      component: () => import('./views/RecordArticle.vue')
    },
    {
      path: '/re',
      name:'RecommendEarnings',
      component: () => import('./views/RecommendEarnings.vue')
    },
    {
      path: '/te',
      name: 'TotalEarnings',
      component: () => import('./views/TotalEarnings.vue')
    },
    {
      path: '/ssa',
      name:'SsArticle',
      component: () => import('./views/SsArticle.vue')
    },
    {
      path: '/aa',
      name: 'AppealArticle',
      component: () => import('./views/AppealArticle.vue')
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
      path: '/ta',
      name: 'TransferArticle',
      component: () => import('./views/TransferArticle.vue')
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
      path: '/mt',
      name: 'mt',
      component: () => import('./views/my-team.vue')
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
      path: '/givePoints',
      name: 'givePoints',
      component: () => import('./views/give-points.vue')
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
