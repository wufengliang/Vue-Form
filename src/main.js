import Vue from 'vue'
import App from './App.vue'

import Antdv from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import store from './store';


Vue.config.productionTip = false
Vue.prototype.$compiler = Vue.compile;

Vue.use(Antdv);

new Vue({
  render: h => h(App),
  store
}).$mount('#app');
