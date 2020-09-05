import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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
      component: () => import('../components/thingShow.vue')
    },
    {
      path: '/orderFood',
      name: 'orderFood',
      component: () => import('../components/orderFood.vue')
    }
  ]
})
