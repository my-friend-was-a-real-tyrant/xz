import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {post, fetch, patch, put,file} from './feach'
import Vant from 'vant';
import { Toast } from 'vant'
import 'vant/lib/index.css';

Vue.use(Vant);


Vue.config.productionTip = false
Vue.prototype.$post = post;
Vue.prototype.Toast = Toast;
Vue.prototype.userinfo = {}
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;
Vue.prototype.$file = file;

// 图片地址
Vue.prototype._imgUrl= process.env.imgUrl;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
