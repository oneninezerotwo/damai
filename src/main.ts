import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import './registerServiceWorker';
import './assets/iconfont/iconfont.css';
import './js/rem.js';
import './assets/base.css';
Vue.prototype.$axios = axios;
Vue.use(require('vue-wechat-title'));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
