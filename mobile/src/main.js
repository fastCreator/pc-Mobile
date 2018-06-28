import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'
import router from './router'
import store from './store'
import Components from './components/install.js'
import 'mint-ui/lib/style.min.css'
import server from './server'

Vue.mixin({
  computed: {
    $server () {
      return server
    }
  }
})
Vue.config.productionTip = false
Vue.use(Components)
Vue.use(Components)
Vue.use(Mint)
let vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.console.log(vm)
