// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import '../my-theme/index.less'

<<<<<<< HEAD
Vue.config.productionTip = false
Vue.use(iView)
=======
Vue.use(iView)
Vue.config.productionTip = false
>>>>>>> 876f51e7586276ef05d82152170a0449f870d2a4

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
