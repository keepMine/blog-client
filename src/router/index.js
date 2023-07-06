import { createRouter, createWebHashHistory } from 'vue-router';
import { BARLIST } from '@constants/sideBar';
import { capitalizeFirstLetter } from '@utils/index';
let routes = [
  {
    path: '/',
    redirect: '/home',
  },
];
const routeList = BARLIST.map(item => ({
  label: item.label,
  value: capitalizeFirstLetter(item.value),
}));
const barRoutes = routeList.map(router => ({
  path: `/${router.value}`,
  name: router.value,
  component: () => import(`@/view/${router.value}.vue`),
  meta: {
    title: router.label,
  },
}));
routes = [...routes, ...barRoutes];
export default createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes,
});
