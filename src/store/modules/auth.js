import api from '../../services/api'

const state = {
  token: null,
  checkoutStatus: false,
  auth: false
}

// getters
const getters = {
  token: state => state.token,
  isAuth: state => state.auth,
  status: state => state.checkoutStatus
}

// actions
const actions = {
  login: function ({commit, state}, credentials) {
    return new Promise((resolve, reject) => {
      commit('REQUEST_START')
      api.auth.login(credentials)
        .then((response) => {
          check(
            response,
            (data) => {
              commit('LOGIN_SUCCESS', data)
              resolve()
            },
            (error) => {
              commit('LOGIN_ERROR')
              reject(error)
            }
          )
        })
        .catch((error) => {
          commit('LOGIN_ERROR')
          reject(error)
        })
    })
  },
  register ({commit, state}, credentials) {
    return new Promise((resolve, reject) => {
      commit('REQUEST_START')
      api.auth.register(credentials)
        .then((response) => {
          check(
            response,
            (data) => {
              commit('REGISTRATION_SUCCESS', data)
              resolve()
            },
            (error) => {
              commit('REGISTRATION_ERROR')
              reject(error)
            }
          )
        })
        .catch((error) => {
          commit('REGISTRATION_ERROR')
          reject(error)
        })
    })
  },
  socials ({commit, state}, credentials) {
    return new Promise((resolve, reject) => {
      api.auth.socials(credentials)
        .then((response) => {
          check(
            response,
            (data) => {
              commit('REGISTRATION_SUCCESS', data)
              resolve()
            },
            (error) => {
              commit('REGISTRATION_ERROR')
              reject(error)
            }
          )
        })
        .catch((error) => {
          commit('REGISTRATION_ERROR')
          reject(error)
        })
    })
  },
  logOut ({commit, state}) {
    state.token = null
    state.auth = false
  }
}

// mutations
const mutations = {
  REQUEST_START (state) {
    state.checkoutStatus = true
  },
  LOGIN_SUCCESS (state, data) {
    state.checkoutStatus = false
    state.token = data.token
    state.auth = true
  },
  LOGIN_ERROR (state) {
    state.checkoutStatus = false
  },
  REGISTRATION_SUCCESS (state, data) {
    state.checkoutStatus = false
    state.token = data.token
    state.auth = true
  },
  REGISTRATION_ERROR (state) {
    state.checkoutStatus = false
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
