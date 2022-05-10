import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue') // set home as path '/'
  },
  {
    path: '/fillform',
    name: 'fillform',
    component: () => import('../views/fillform.vue') // set home as path '/'
  },
  {
    path: '/confirm',
    name: 'confirm',
    component: () => import('../views/confirm.vue') // set home as path '/'
  },


  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
