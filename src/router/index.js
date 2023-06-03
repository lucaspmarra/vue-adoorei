import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/HomeView.vue';

import LoginLayout from '../layouts/LoginLayout.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';

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
      path: '/dashboard',
      name: 'dashboard',
      meta: { layout: DefaultLayout },
      component: () => import('../pages/DashboardView.vue')
    }
  ]
});

export default router;
