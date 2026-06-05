import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import PopularView from '@/views/PopularView.vue'
import GameDetailView from '@/views/GameDetailView.vue'
import SearchView from '@/components/SearchView.vue'

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
  },

  {
    path: '/search/:query',
    component: SearchView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
