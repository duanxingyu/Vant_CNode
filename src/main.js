import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios'
import utils from './utils/index'
import './assets/animate.min.css'
import toast from './assets/js/toast'

Vue.prototype.$axios=axios;
Vue.prototype.toast = toast;
Vue.prototype.HOST='/api';
Vue.prototype.utils=utils;
Vue.config.productionTip = false;



export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
