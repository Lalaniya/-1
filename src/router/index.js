import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    component: () => import('@/views/Home')
  },
  {
    path: '/listgood/:name',
    name: 'listgood',
    component: () => import('@/views/ListGood')
  },
  {
    path: '/newlist',
    component: () => import('@/views/NewList')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('@/views/Detail')
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
