import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import VuejsDialog from 'vuejs-dialog'
Vue.use(VueAxios,axios)
// Vue.use(VuejsDialog)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
