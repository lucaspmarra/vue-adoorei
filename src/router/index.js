import { createRouter, createWebHistory } from 'vue-router';

import DefaultLayout from '../layouts/DefaultLayout.vue';
import LoginLayout from '../layouts/LoginLayout.vue';
import RegisterLayout from '../layouts/RegisterLayout.vue';


import HomeView from '../pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: LoginLayout },
      component: HomeView
    },
    {
      path: '/painel',
      name: 'painel',
      meta: { layout: DefaultLayout },
      component: () => import('../pages/DashboardPage.vue')
    },
    {
      path: '/planos',
      name: 'planos',
      meta: { layout: RegisterLayout },
      component: () => import('../pages/PlanPage.vue')
    },
    {
      path: '/registro/:planId',
      name: 'registro',
      meta: { layout: RegisterLayout },
      component: () => import('../pages/RegisterPage.vue')
    }
  ]
});

export default router;
