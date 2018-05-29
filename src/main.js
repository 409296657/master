// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import getSignure from '@/utils/getSignure'
import axios from 'axios'
import common from '@/utils/common'


Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.common = common

Vue.use(ElementUI)
Vue.use(getSignure)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
