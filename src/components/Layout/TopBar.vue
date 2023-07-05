<!--  -->
<template>
  <div class="TopBar">
    <div
      v-for="el in barList"
      :key="el.value"
      class="topBar-item"
      @click="clickTopBar(el)"
    >
      <span>{{ el.label }}</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { BARLIST } from '@constants/topBar';
const router = useRouter();
onMounted(() => {});
const barList = computed(() => BARLIST);
const clickTopBar = el => {
  router.push(`/${el.value}`);
};
</script>
<style lang="less" scoped>
.TopBar {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 2px;

  .topBar-item {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 48px;
  }
}
</style>
