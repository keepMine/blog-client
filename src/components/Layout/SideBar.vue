<!--  -->
<template>
  <nav class="SideBar" :style="{ width: (showStatus && '260px') || '20px' }">
    <div class="foldMenu" @click="showHandle">
      <i class="iconfont" :class="showStatus ? 'icon-zhedie' : 'icon-zhankai'"></i>
    </div>
    <template v-if="showStatus"><SideContentLarge /></template>
    <template v-else>1</template>
  </nav>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import SideContentLarge from './SideContentLarge.vue';
const showStatus = ref(true);
const showHandle = () => {
  showStatus.value = !showStatus.value;
};

onMounted(() => {});
</script>
<style lang="less" scoped>
.SideBar {
  width: 260px;
  height: 100%;
  padding: 8px;
  position: relative;
  transition: width 0.1s linear;
  .foldMenu {
    position: absolute;
    top: 0;
    right: 0;

    .iconfont {
      font-size: 28px;
    }
  }
}
</style>
