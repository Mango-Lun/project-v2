import Vue from 'vue'
import App from './App.vue'
import '../plugins/element'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'

// 挂载到原型，可以全局使用 axios
Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
