import axios from 'axios'
import store from '../../store'

const baseURL = 'https://cors-proxy.erosha.ga/http://api2.test1.jslab.ru/api/v1/'

const HTTP = axios.create({
  headers: {'Content-Type': 'application/json'}
})

export default {
  post (url, body) {
    return HTTP.post(url, body)
  },
  get (method, body = {}) {
    body.method = method
    body.token = store.getters['auth/token']
    return HTTP.get(baseURL, {
      params: body
    })
  },
  put (url, body) {
    return HTTP.put(url, body)
  },
  delete (url, body) {
    return HTTP.delete(url, {
      params: body
    })
  }
}
