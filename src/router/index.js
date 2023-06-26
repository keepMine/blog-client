import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    component: import('@/view/HomeSection.vue'),
  },
  {
    path: '/about',
    component: import('@/view/AboutSection.vue'),
  },
];
export default createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes,
});
