import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/'
    //   // redirect: '/login'
    // },
    {
      path: '/',
      component: resolve => require(['../page/Home'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['../page/Home'], resolve)
        },
        {
          path: '/table',
          component: resolve => require(['../page/table'], resolve)
        }
      ]
    }
  ]
})
