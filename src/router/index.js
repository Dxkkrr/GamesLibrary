import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import PopularView from '@/views/PopularView.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },

  {
    path: '/popular',
    component: PopularView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
