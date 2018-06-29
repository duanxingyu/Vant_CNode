import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios'
import utils from './utils/index'


Vue.prototype.$axios=axios;
Vue.prototype.HOST='/api';
Vue.prototype.utils=utils;
Vue.config.productionTip = false



export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
