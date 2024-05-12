import { createRouter, createWebHistory } from 'vue-router'
import { Pages } from '@/router/pages'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: Pages.home,
      component: () => import("@/pages/index.vue")
    },
    {
      path: '/account',
      name: Pages.account,
      component: () => import("@/layout/HeaderLogin.vue"),
      children: [
        {
          path: 'login',
          name: Pages.login,
          component: () => import("@/pages/login.vue")
        },
        {
          path: 'registration',
          name: Pages.registration,
          component: () => import("@/pages/registration.vue")
        }
      ]
    }
  ]
})

export default router
