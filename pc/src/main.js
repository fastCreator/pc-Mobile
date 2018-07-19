import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Components from './components/install.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './server'
import './utils'
import './common/common.less'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Components)
Vue.use(Components)

let vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.console.log(vm)
