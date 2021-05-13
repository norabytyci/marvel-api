import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Character from '../views/Character.vue'
import Comics from '../views/Comics.vue'
import Comic from '../views/Comic.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/comics',
    name: 'Comics',
    component: Comics
  },
  {
    path: '/characters/:id',
    name: 'Character',
    component: Character
  },
  {
    path: '/comics/:id',
    name: 'Comic',
    component: Comic
  },
]

const router = new VueRouter({
  routes
})

export default router
