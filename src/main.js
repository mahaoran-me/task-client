import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL='http://localhost:80'
axios.defaults.withCredentials=true
axios.interceptors.response.use((response) => {
  if (response.data.code === -1) {
    router.push('/login').then();
  }
  return response;
})

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
