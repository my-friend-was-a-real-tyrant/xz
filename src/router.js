import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ServiceCenter from './views/ServiceCenter.vue'
import MyWallet from './views/MyWallet.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/serviceCenter',
      name: 'serviceCenter',
      component: ServiceCenter
    },
    {
      path: '/myWallet',
      name: 'myWallet',
      component: MyWallet
    }
  ]
})
