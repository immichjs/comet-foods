import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'

import { useUserStore } from '@/stores/userStore'

const routes = [
  {
    path: '/',
    component: HomeView,
    beforeEnter(to, from, next) {
      const store = useUserStore()

      const userInfos = JSON.parse(localStorage.getItem('USER_INFOS'))

      if (userInfos) store.authenticated = true

      if (store.authenticated) next()
      else next('/login')
    },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
