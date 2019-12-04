import Vue from 'vue'
import App from './App.vue'
import router from './routers' //vue以index命名的文件自动引入，可以省略
import store from './stores'

import axios from 'axios'
Vue.prototype.axios = axios;

// 过滤器
Vue.filter('setWH', (url, arg) => {
    return url.replace(/w\.h/, arg);
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')