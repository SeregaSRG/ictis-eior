import Vue from 'vue'
import store from '../store/'

Vue.mixin({
  methods: {
    openPopup (name) {
      /*
      let mfPages = document.getElementsByClassName('mf-page')
      for (let i = 0; i < mfPages.length; i++) {
        mfPages[i].classList.add('mf-page--popuped')
      }
       */
      document.body.classList.add('mf-modal-open')
      store.commit('modals/OPEN_POPUP', name)
    },
    closePopup () {
      /*
      let mfPages = document.getElementsByClassName('mf-page')
      for (let i = 0; i < mfPages.length; i++) {
        mfPages[i].classList.remove('mf-page--popuped')
      }
       */
      document.body.classList.remove('mf-modal-open')
      store.commit('modals/CLOSE_POPUP')
    },
    openInBrowser (link) {
      window.open(link, '_system')
      return false
    }
  }
})
