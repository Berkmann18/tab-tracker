import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import store from './store'
import Panel from './components/Panel'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.component('panel', Panel)

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
