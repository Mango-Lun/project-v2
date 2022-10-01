import Vue from 'vue'
import App from './App.vue'

// import '../plugins/element'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'font-awesome/css/font-awesome.min.css'

// import axios from "axios";
import service from './service'

import router from './router'

import echarts from 'echarts'

// 挂载到原型，可以全局使用 axios
Vue.prototype.service = service

Vue.prototype.$echarts = echarts

Vue.use(ElementUI)

Vue.config.productionTip = false

// 导航守卫
router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('username')) {
    if (to.path != '/login') {
      next('/login')
    } else next()
  }
  next()
})

new Vue({
  router, // 挂载 router
  render: (h) => h(App),
}).$mount('#app')
