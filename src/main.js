import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
// 网络请求
import axios from 'axios';
import config from './config'


Vue.prototype.$axios = axios // 请求放入全局
Vue.use(ElementUI);
Vue.prototype.$config = config // 配置



new Vue({
  el: '#app', 
  router,
  render: h => h(App)
});