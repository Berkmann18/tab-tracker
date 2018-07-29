'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    user: null,
    token: null,
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      console.log('token:', token, 'bool', !!token)
      state.isUserLoggedIn = !!token
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token) // Activate the setToken() mutation
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    }
  }
})
