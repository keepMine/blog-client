<template>
  <Layout />
</template>

<script setup>
import { onMounted, watchEffect } from 'vue';
import Layout from '@view/index.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
// 动态根据路由更新网站标题
const updateTitle = () => {
  const pageTitle = route.meta.title; // 获取当前路由的标题
  document.title = pageTitle ? `${pageTitle}-吴良建的博客` : 'WLJ-Blog';
};
watchEffect(() => updateTitle());
onMounted(() => {
  updateTitle();
});
</script>

<style lang="less" scoped></style>
