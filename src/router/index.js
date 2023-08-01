import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '',
    redirect: '/home',
    meta: {
      showInbreadcrumb: false,
    },
  },
  {
    path: '/home',
    name: '首页',
    component: () => import(`@/view/Home.vue`),
    meta: {
      title: '首页',
      icon: 'icon-shouye-zhihui',
    },
  },
  {
    path: '/myWorks',
    name: '个人作品',
    component: () => import(`@/view/MyWorks.vue`),
    meta: {
      title: '个人作品',
      icon: 'icon-bianji',
    },
  },
  {
    path: '/article',
    name: '详情',
    component: () => import(`@/view/Article.vue`),

    meta: {
      title: '文章专题',
      icon: 'icon-shuba',
    },
  },
  {
    path: '/aboutMe',
    name: '关于我',
    component: () => import(`@/view/AboutMe.vue`),
    meta: {
      title: '关于我',
      icon: 'icon-gerenzhongxin-zhihui',
    },
  },
  {
    path: '/articleContent/:id',
    component: () => import(`@common/ArticleContent.vue`),
    meta: {
      title: '详情',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ y: 0 }),
});
// router.beforeEach((to,from) => {

// });
export default router;
