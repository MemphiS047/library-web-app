import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue/dist/bootstrap-vue.esm';
// import { createWebHistory, createRouter } from 'vue-router'

import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

// import mainpage from './components/mainpage.vue';
// const router = createRouter({
//     base: '/product',
//     history: createWebHistory,
//     routes: [
//         { path: '/home', component: mainpage }
//     ]
// });

// Vue.use(router);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')