const state = {
  isPopup: false,
  popupList: {
    search: false,
    module: false,
    change: false,
    create: false
  }
}

const getters = {
  isPopup: (state) => state.isPopup
}

const actions = {
  togglePopup ({ commit, state }) {
    commit('TOGGLE_POPUP')
  }
}

const mutations = {
  SET_POPUP_STATUS (state, status) {
    state.isPopup = status
  },
  TOGGLE_POPUP (state, status) {
    state.isPopup = !state.isPopup
  },
  OPEN_POPUP (state, name) {
    if (state.popupList.hasOwnProperty(name)) {
      state.isPopup = true
      state.popupList[name] = true
    }
  },
  CLOSE_POPUP (state) {
    state.isPopup = false
    for (let key in state.popupList) {
      state.popupList[key] = false
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
