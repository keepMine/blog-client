<!--  -->
<template>
  <section class="section">
    <header class="header">
      <TopBar />
    </header>
    <ChangeSkin />
    <section class="content">
      <router-view></router-view>
    </section>
  </section>
</template>

<script setup>
import TopBar from '@layout/TopBar.vue';
import ChangeSkin from '@layout/ChangeSkin.vue';
</script>
<style lang="less" scoped>
.section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 16px;
  height: 100%;
}
.header {
  width: 60%;
}
</style>
