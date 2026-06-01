import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import PopularView from '@/views/PopularView.vue'
import GameDetailView from '@/views/GameDetailView.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },

  {
    path: '/popular',
    component: PopularView
  },

  {
    path: '/game/:id',
    component: GameDetailView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
