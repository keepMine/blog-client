import About from '@/view/AboutSection.vue';
import Home from '@/view/HomeSection.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
];
export default createRouter({
  history: createWebHashHistory(),
  routes,
});
