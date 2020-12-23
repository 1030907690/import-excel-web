import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
// 网络请求
import axios from 'axios';
Vue.prototype.$axios = axios // 请求放入全局
Vue.use(ElementUI);

new Vue({
  el: '#app', 
  router,
  render: h => h(App)
});