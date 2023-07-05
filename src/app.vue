<template>
  <Layout />
</template>

<script setup>
import { onMounted } from 'vue';
import Layout from '@view/index.vue';
import { getArticleList } from '@/api/article';
const getList = async () => {
  const res = await getArticleList();
  console.log('res', res);
};
onMounted(() => {
  getList();
});
</script>

<style lang="less" scoped></style>
