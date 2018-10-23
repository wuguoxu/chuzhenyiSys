import Vue from 'vue'
import Router from 'vue-router'
import loginPage from '@/views/page-login/index' // 登录页面
import mainPage from '@/views/page-main/index' // 主页面
import homePage from '@/views/page-home/index' // 主页面
import mapPage from '@/views/page-map/map' // 地图页面
import repairePage from '@/views/page-repaire/repaire_list' // 维修管理
import repairePageAdd from '@/views/page-repaire/repaire_add' // 新增维修
import usersettingsPage from '@/views/page-sysSettings/user-settings' // 用户设置
import pswCg from '@/views/page-sysSettings/password-change' // 用户密码修改

import eqList from '@/views/page-equipManage/eq-query' // 设备列表
import eqDetails from '@/views/page-equipManage/eq-details' // 设备列表

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      name: 'login-page',
      component: loginPage
    },
    {
      path: '/login',
      name: 'login-page',
      component: loginPage
    },
    {
      path: '/main',
      redirect: '/main/home',
      name: 'main-page',
      component: mainPage,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'home',
          component: homePage
        },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'map',
          component: mapPage
        },
        {
          path: 'repaire_list',
          name: 'repaire-page',
          component: repairePage
        },
        {
          path: 'repaire_add',
          name: 'repaire-page-add',
          component: repairePageAdd
        },
        {
          path: 'userSettins',
          name: 'sys-page-userSettings',
          component: usersettingsPage
        },
        {
          path: 'pswcg',
          name: 'sys-page-passwordChange',
          component: pswCg
        },
        {
          path: 'eqList',
          name: 'page-equipmentList',
          component: eqList
        },
        {
          path: 'eqDetails',
          name: 'page-equipmentDetails',
          component: eqDetails
        }
      ]
    }
  ]
})
