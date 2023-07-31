import { createApp } from 'vue';
import App from '@/app.vue';
import router from '@/router/index';
import vuex from '@/store/index';
import '@/styles/index.less'; // global样式
import Breadcrumb from '@layout/Breadcrumb.vue';

import List from '@layout/List.vue';

const app = createApp(App);
app.component('List', List);
app.component('Breadcrumb', Breadcrumb);

app.use(router);
app.use(vuex);
app.mount('#app');
