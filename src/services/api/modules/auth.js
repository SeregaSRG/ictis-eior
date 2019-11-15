import Network from '../network.js'

export default {
  register (request) {
    return Network.get('registerUser', request)
  },
  login (request) {
    return Network.get('getUserToken', request)
  },
  forgotRequest (request) {
    return Network.get('resetPasswordStart', request)
  },
  forgotConfirm (request) {
    return Network.get('resetPasswordEnd', request)
  },
  socials (request) {
    request.type = 'socials'
    return Network.get('registerUser', request)
  }
}
