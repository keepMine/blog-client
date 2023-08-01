<!-- 侧边栏 -->
<template>
  <nav class="SideBar" :style="{ width: (showStatus && '260px') || '15px' }">
    <div class="foldMenu" @click="showHandle">
      <i class="iconfont" :class="showStatus ? 'icon-zhedie' : 'icon-zhankai'"></i>
    </div>
    <SideContentLarge v-show="showStatus" />
  </nav>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import SideContentLarge from './SideContentLarge.vue';
import { setIntoSession, getIntoSession } from '@utils/index';

const showStatus = ref(true);
const showHandle = () => {
  showStatus.value = !showStatus.value;
  setIntoSession('sideBarShowStatus', showStatus.value);
};

onMounted(() => {
  showStatus.value = getIntoSession('sideBarShowStatus') === false ? false : true;
});
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
      cursor: pointer;
    }
  }
}
</style>
