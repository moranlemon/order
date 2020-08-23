import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
// import { component } from 'vue/types/umd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/thingShow',
      name: 'thingShow',
      component: () => import('../pages/thingShow.vue')
    },
    {
      path: '/orderFood',
      name: 'orderFood',
      component: () => import('../pages/orderFood.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login.vue')
    }
  ]
})
