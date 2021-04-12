import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Manutencao from '../views/Manutencao.vue'
import Redes from '../views/Redes.vue'
import Web from '../views/Web.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'Sobre',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Sobre.vue')
  },
  {
    path: '/manutencao',
    name: 'Manutencao',
    component: Manutencao
  },
  {
    path: '/redes',
    name: 'Redes',
    component: Redes
  },
  {
    path: '/web',
    name: 'Web',
    component: Web
  },
]

const router = new VueRouter({
  routes
})

export default router
