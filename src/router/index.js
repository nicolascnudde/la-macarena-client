/**
 * Router index file
 * - All routes are defined here
 * - All routes except Home are Lazy Loaded for performance reasons
 */
import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/activities',
    name: 'Activities',
    component: () => import('@/views/Activities.vue'),
  },
  {
    path: '/activities/:id-:title',
    name: 'Activity',
    component: () => import('@/views/Activity.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/goals',
    name: 'Goals',
    component: () => import('@/views/Goals.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: 'app__header__nav__list__item__link--active',
  scrollBehavior() {
    return { top: 0 };
  },
});
