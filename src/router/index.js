import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import UserIndex from '@/components/UserIndex'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/uindex',
        name: 'UserIndex',
        component: UserIndex
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin
    }
  ]
})
