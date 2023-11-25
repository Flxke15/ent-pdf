// Composables
import { createRouter, createWebHistory } from 'vue-router'
import manage from './manage'

const routes = [
  ...manage,
  {
    path: '/home',
    name: 'home',
    component: () => import('@/components/Home.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
