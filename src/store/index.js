import Vue from 'vue'
import Vuex from 'vuex'
import firebaseConfig from '../config/firebase.config'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Vuex)

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default new Vuex.Store({
  state: {
    auth: {
      authenticated: false,
      email: ''
    }
  },
  getters: {
    getEmail: state => {
      return state.auth.email
    }
  },
  mutations: {
    setAuthenticated (state, payload) {
      state.auth.authenticated = payload
    },
    setEmail (state, email) {
      state.auth.email = email
    }
  },
  actions: {
    login ({ commit }, { email, password }) {
      console.log(email, password)

      firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .then((val) => {
          commit('setAuthenticated', true)
          commit('setEmail', email)
          Vue.router.push({
            name: 'home'
          })
        })
        .catch(function (error) {
        // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.')
          } else {
            alert(errorMessage)
          }
        })
    },

    logout ({ commit }) {
      firebase.auth().signOut().then(function () {
        commit('setAuthenticated', false)
        commit('setEmail', '')
        Vue.router.push({
          name: 'login'
        })
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
})
