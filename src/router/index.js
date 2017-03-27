import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/components',
      component: Main
    },
    {
      path: '/:page',
      component: Main
    },
    {
      path: '/*',
      redirect: '/components',
      component: Main
    }
  ]
})
