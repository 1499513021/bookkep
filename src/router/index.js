import Vue from 'vue'
import Router from 'vue-router'
import Turnover from '@/components/turnover/turnover'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Turnover',
      meta: {
        index: 0
      }
    },
    // 登录页面
    {
      path: '/login',
      component: (resolve) => require(['../components/login/login'],resolve)
    },
    // 注册页面
    {
      path: '/register',
      component: (resolve) => require(['../components/login/register'],resolve)
    },
    // 首页路由
    {
      path: '/home',
      component: (resolve) => require(['../components/home/home'],resolve),
      meta:{

      }
    },
    {
      path: '/test',
      component: (resolve) => require(['../components/test/pra'], resolve),
      meta:{
        index: 1
      }
    },
    // 账单路由
    {
      path: '/Turnover',
      name: 'Turnover',
      meta: {
        index: 0
      },
      component: Turnover,
      children: [
        {
          path: '',
          redirect: '/Turnover/list',
        },
        {
          path: 'invoice',
          component: (resolve) => require(['../components/invoice/invoice'], resolve),
          meta: {
            index: 0,
            lower: 2
          },
        },
        {
          path: 'list',
          component: (resolve) => require(['../components/billList/billList'], resolve),
          meta: {
            index: 0,
            lower: 1
          },
        }
      ]
    },
    // 记账路由
    {
      path: '/Bill',
      name: 'Bill',
      meta: {
        index: 1
      },
      component: (resolve) => require(['../components/bill/addBill'], resolve),
      children: [
        {
          path: '',
          redirect: '/Bill/out'
        },
        {
          path: 'out',
          component: (resolve) => require(['../components/out/out'], resolve),
          meta: { index: 1, lower: 0 }
        },
        {
          path: 'sales',
          component: (resolve) => require(['../components/sales/sales'], resolve),
          meta: { index: 1, lower: 1 }
        },
        {
          path: 'life',
          component: (resolve) => require(['../components/life/life'], resolve),
          meta: { index: 1, lower: 2 }
        }
      ]
    },
    // 库存路由
    {
      path: '/House',
      component: (resolve) => require(['../components/house/house'], resolve),
      children: [
        {
          path: '',
          redirect: '/House/graphics',
        },
        {
          path: 'fruit',
          component: (resolve) => require(['../components/fruitList/fruitList'], resolve),
          meta: {
            index: 2,
            lower: 2
          },
        },
        {
          path: 'graphics',
          component: (resolve) => require(['../components/echarts/graphics'], resolve),
          meta: {
            index: 2,
            lower: 1
          },
        }
      ]
    },
    // 个人信息路由
    {
      path: '/user',
      component: (resolve) => require(['../components/user/user'], resolve),
      meta: {
        index: 3
      }
    }
  ]
})
