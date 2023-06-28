<template>
  <router-link to="/">home</router-link>
  <router-link to="/about">about</router-link>
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from 'vue';
import { getArticleList } from '@/api/article';
const getList = async () => {
  const res = await getArticleList();
  console.log('res', res);
};
onMounted(() => {
  getList();
});
</script>

<style lang="less" scoped>
div {
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
