import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      authenticated: false,
      email: null
    }
  },
  mutations: {
    setAuthenticated (state, payload) {
      state.auth.authenticated = payload
    }
  },
  actions: {
    login ({ commit, dispatch }, user) {
      console.log(user)
      commit('setAuthenticated', true)
      Vue.router.push({
        name: 'home.index'
      })
    }
  }
})
