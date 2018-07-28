import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RegisterComponent from './components/RegisterComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterComponent
    }
  ]
})
