<!--  -->
<template>
  <section>
    <header class="header">
      <TopBar />
    </header>
    <section class="content">
      <router-view></router-view>
    </section>
  </section>
</template>

<script setup>
import TopBar from '@layout/TopBar.vue';
</script>
<style lang="less" scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 16px;
}
.header {
  width: 60%;
}
</style>
