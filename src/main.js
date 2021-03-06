// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iView'
import "iview/dist/styles/iview.css"


Vue.config.productionTip = false
Vue.use(iView)

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token");
  if(to.fullPath !='/login'&& !token) {
    return next({path:"/login"})
  }
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

