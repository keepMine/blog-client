import { createRouter, createWebHashHistory } from 'vue-router';
import { BARLIST } from '@constants/topBar';
import { capitalizeFirstLetter } from '@utils/index';
let routes = [
  {
    path: '/',
    redirect: '/home',
  },
];
const routeList = BARLIST.map(item => capitalizeFirstLetter(item.value));
const barRoutes = routeList.map(router => ({
  path: `/${router}`,
  component: import(`@/view/${router}.vue`),
}));
routes = [...routes, ...barRoutes];
export default createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes,
});
