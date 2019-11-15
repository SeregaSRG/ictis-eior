import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

// TODO поменять место импорта миксинов
require('../mixins/')
