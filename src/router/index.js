// Composables
import { createRouter, createWebHistory } from 'vue-router'
//import routes from './routes'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'

const routes = [
  {
    path: '/',
    redirect: '/HelloWorld'
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/Test',
    name: 'Test',
    component: Test
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/components/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
