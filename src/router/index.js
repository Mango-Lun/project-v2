import Vue from "vue";
import Router from "vue-router";
// import Home from '../components/Home.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login",
      component: () => import("../components/Login"),
    },
    {
      path: "/login",
      component: () => import("../components/Login"),
    },
    {
      path: "/home",
      // component: Home
      // 路由懒加载
      // component: () => import('@/components/Home') //官方推荐
      component: (resolve) => require(["../components/Home"], resolve), //异步组件
    },
  ],
  mode: "history",
});
