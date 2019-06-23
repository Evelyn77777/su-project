// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import './router/index'
import router from "./router";
//引入axios
import axios from 'axios'
//全局定义axios,添加在Vue的原型中
Vue.prototype.$http=axios
Vue.config.productionTip = false;
//引入Bootstrap的样式：
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/css/index.css'
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
