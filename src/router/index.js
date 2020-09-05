import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import HelloWorld from '@/components/HelloWorld'
=======
import HelloWorld from '@/pages/HelloWorld'
>>>>>>> 876f51e7586276ef05d82152170a0449f870d2a4
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
<<<<<<< HEAD
      component: () => import('../components/thingShow.vue')
=======
      component: () => import('../pages/thingShow.vue')
>>>>>>> 876f51e7586276ef05d82152170a0449f870d2a4
    },
    {
      path: '/orderFood',
      name: 'orderFood',
<<<<<<< HEAD
      component: () => import('../components/orderFood.vue')
=======
      component: () => import('../pages/orderFood.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login.vue')
>>>>>>> 876f51e7586276ef05d82152170a0449f870d2a4
    }
  ]
})
