<!--  -->
<template>
  <section class="section">
    <SideBar />

    <section class="content">
      <router-view></router-view>
    </section>
  </section>
</template>

<script setup>
import SideBar from '@layout/SideBar.vue';
// import ChangeSkin from '@layout/ChangeSkin.vue';
</script>
<style lang="less" scoped>
.section {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  height: 100%;
}
</style>
