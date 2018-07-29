import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RegisterComponent from './components/Register.vue'
import LoginComponent from './components/Login.vue'

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
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    }
  ]
})
