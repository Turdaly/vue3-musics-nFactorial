import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/pages/index.vue")
    },
    {
      path: '/account',
      name: 'account',
      component: () => import("@/layout/HeaderLogin.vue"),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import("@/pages/login.vue")
        },
        {
          path: 'registration',
          name: 'registration',
          component: () => import("@/pages/registration.vue")
        }
      ]
    }
  ]
})

export default router
