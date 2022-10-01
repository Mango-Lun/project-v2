import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      hidden: true,
      component: () => import('../components/Login'),
    },
    {
      path: '/login',
      hidden: true,
      component: () => import('../components/Login'),
    },
    {
      path: '*',
      name: 'NotFound',
      hidden: true,
      component: () => import('../components/NotFound'),
    },
    // {
    //   path: '/home',
    //   // component: Home
    //   // 路由懒加载
    //   // component: () => import('@/components/Home') //官方推荐
    //   component: (resolve) => require(['../components/Home'], resolve), //异步组件
    // },
    // 学生管理
    {
      path: '/home',
      name: '学生管理',
      iconClass: 'fa fa-bars',
      redirect: '/home/student',
      component: () => import('@/components/Home'),
      children: [
        {
          path: '/home/student',
          name: '学生列表',
          iconClass: 'fa fa-user',
          component: () => import('../components/students/StudentList'),
        },
        {
          path: '/home/info',
          name: '信息列表',
          iconClass: 'fa fa-user',
          component: () => import('../components/students/InfoList'),
        },
        // {
        //   path: '/home/infos',
        //   name: '信息管理',
        //   iconClass: 'fa fa-user',
        //   component: () => import('../components/students/InfoLists'),
        // },
        {
          path: '/home/work',
          name: '作业列表',
          iconClass: 'fa fa-user',
          component: () => import('../components/students/WorkList'),
        },
        // {
        //   path: '/home/works',
        //   name: '作业管理',
        //   iconClass: 'fa fa-user',
        //   component: () => import('../components/students/WorkMent'),
        // },
      ],
    },
    // 数据统计
    {
      path: '/home',
      name: '数据统计',
      iconClass: 'fa fa-sliders',
      component: () => import('@/components/Home'),
      children: [
        {
          path: '/home/data',
          name: '数据概览',
          iconClass: 'fa fa-user',
          component: () => import('../components/dataAnalysis/DataView'),
        },
        {
          path: '/home/map',
          name: '地图概览',
          iconClass: 'fa fa-user',
          component: () => import('../components/dataAnalysis/MapView'),
        },
        {
          path: '/home/score',
          name: '分数地图',
          iconClass: 'fa fa-user',
          component: () => import('../components/dataAnalysis/ScoreMap'),
        },
        {
          path: '/home/travel',
          name: '旅游地图',
          iconClass: 'fa fa-user',
          component: () => import('../components/dataAnalysis/TravelMap'),
        },
      ],
    },
    // 用户管理
    {
      path: '/users',
      name: '用户管理',
      iconClass: 'fa fa-user',
      component: () => import('../components/Home'),
      children: [
        {
          path: '/users/user',
          name: '权限管理',
          iconClass: 'fa fa-user',
          component: () => import('../components/users/User'),
        },
      ],
    },
  ],
  mode: 'history',
})
