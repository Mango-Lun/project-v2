import Vue from "vue";
import App from "./App.vue";

// import '../plugins/element'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "font-awesome/css/font-awesome.min.css";

import axios from "axios";

import router from "./router";

// 挂载到原型，可以全局使用 axios
Vue.prototype.axios = axios;

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router, // 挂载 router
  render: (h) => h(App),
}).$mount("#app");
