import Vue from 'vue'
import Vuex from 'vuex'

import modals from './modules/modals'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default new Vuex.Store({
  modules: {
    modals
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV
})
