// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Share from 'vue-social-share'  
import VueParticles from 'vue-particles'
// import 'babel-polyfill'
Vue.use(VueParticles)
Vue.use(Share)  

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
