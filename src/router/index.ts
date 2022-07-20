import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
const home = () => import('../pages/home.vue')
const game = () => import('../pages/game.vue')
const relax = () => import('../pages/relax.vue')

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/home" },
  { 
    path: '/home', 
    name: 'Home',
    component: home 
  },
  { 
    path: '/game',
    name: 'Game',
    component: game 
  },
  { 
    path: '/relax',
    name: 'Relax',
    component: relax 
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router