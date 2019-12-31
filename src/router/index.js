import Vue from 'vue'
import Router from 'vue-router'
import Turnover from '@/components/turnover/turnover'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Turnover'
    },
    {
      path: '/Turnover',
      name: 'Turnover',
      component: Turnover
    },
    {
      path: '/Bill',
      name: 'Bill',
      component: (resolve) => require(['../components/bill/addBill'], resolve),
      children: [
        {
          path: '/Bill/out',
          component: (resolve) => require(['../components/out/out'], resolve)
        },
        {
          path: '/Bill/sales',
          component: (resolve) => require(['../components/sales/sales'],resolve)
        }
      ]
    }
  ]
})
