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
    path: '/shoplist',
    component: () => import('@/views/ShopList')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('@/views/Detail')
  },
  {
    path: '/search/:text',
    name: 'search',
    component: () => import('@/views/Search')
  },
  {
    path: '/login',
    component: () => import('@/views/Login'),
    children: [
      {
        path: '/login/sign_up',
        name: 'sign_up',
        component: () => import('@/views/Login/Sign_Up')
      },
      {
        path: '/login/sign_in',
        name: 'sign_in',
        component: () => import('@/views/Login/Sign_In')
      },
      {
        path: '/login',
        redirect: '/login/sign_up'
      }
    ],
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('token')) {
        next()
      }
    }
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
