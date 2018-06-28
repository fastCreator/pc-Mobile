import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(window.sessionStorage.user || null)
  },
  mutations: {
    setUser (state, user) {
      state.user = state
      window.sessionStorage.user = JSON.stringify(user)
    }
  },
  actions: {

  }
})
