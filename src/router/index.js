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
        index:0
      }
    },
    {
      path: '/Turnover',
      name: 'Turnover',
      meta: {
        index:0
      },
      component: Turnover,
      children:[
        {
          path: '',
          redirect: '/Turnover/list',
        },
        {
          path: 'invoice',
          component: (resolve) => require(['../components/invoice/invoice'], resolve),
          meta: {
            index:0,
            listTit: 2
          },
        },
        {
          path: 'list',
          component: (resolve) => require(['../components/billList/billList'], resolve),
          meta: {
            index:0,
            listTit: 1
          },
        }
      ]
    },
    {
      path: '/Bill',
      name: 'Bill',
      meta: {
        index:1
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
          meta: {index:1,lower:0}
        },
        {
          path: 'sales',
          component: (resolve) => require(['../components/sales/sales'],resolve),
          meta: {index:1,lower:1}
        },
        {
          path: 'life',
          component: (resolve) => require(['../components/life/life'],resolve),
          meta: {index:1,lower:2}
        },
        {
          path: '/Bill/test',
          component: (resolve) => require(['../components/test/test'],resolve)
        }
      ]
    },
    {
      path: '/House',
      component: (resolve) => require(['../components/house/house'],resolve),
      children:[
        {
          path: '',
          redirect: '/House/graphics',
        },
        {
          path: 'fruit',
          component: (resolve) => require(['../components/fruitList/fruitList'],resolve),
          meta: {
            index:2,
            house:2
          },
        },
        {
          path: 'graphics',
          component: (resolve) => require(['../components/echarts/graphics'],resolve),
          meta: {
            index:2,
            house:1
          },
        }
      ]
    },
    {
      path: '/user',
      component: (resolve) => require(['../components/user/user'],resolve),
      meta:{
        index: 3
      }
    }
  ]
})
