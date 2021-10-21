import Vue from 'vue'
import App from './App.vue'

// Bootstrap imports
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')