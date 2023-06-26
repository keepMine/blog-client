<template>
  <router-link to="/">home</router-link>
  <router-link to="/about">about</router-link>
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from 'vue';
const testFunc = () => {
  console.log('first', 1);
};
onMounted(() => {
  testFunc();
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
