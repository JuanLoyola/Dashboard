import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
    path: '/recover',
    name: 'RecoverPassword',
    component: () => import(/* webpackChunkName: "about" */ '../views/RecoverPassword.vue')
  },
  {
    path:'/recoverydone',
    name:'RecoveryDone',
    component: () => import(/* webpackChunkName: "about" */ '../views/RecoveryDone.vue')
  },
  {
    path:'/profile',
    name:'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
