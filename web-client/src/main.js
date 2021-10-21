import Vue from 'vue'
import App from './App.vue'

// Bootstrap imports
import {BootstrapVue, IconsPlugin } from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
