import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {post, fetch, patch, put} from './feach'

Vue.config.productionTip = false
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
