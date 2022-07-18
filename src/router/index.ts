import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
const home = () => import('../pages/home.vue')
const game = () => import('../pages/game.vue')

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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router