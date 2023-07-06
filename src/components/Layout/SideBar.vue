<!--  -->
<template>
  <nav class="SideBar" :style="{ width: (showStatus && '260px') || '20px' }">
    <div class="foldMenu" @click="showHandle">
      <i v-if="showStatus" class="iconfont icon-zhedie"></i>
      <i v-else class="iconfont icon-zhankai"></i>
    </div>
    <template v-if="showStatus">
      <div class="header"></div>
      <div class="content">
        <div
          v-for="el in barList"
          :key="el.value"
          class="sideBar-item"
          @click="clickSideBar(el)"
        >
          <span>{{ el.label }}</span>
        </div>
      </div>
      <div class="footer">
        <ChangeSkin />
      </div>
    </template>
    <template v-else>1</template>
  </nav>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { BARLIST } from '@constants/sideBar';
import ChangeSkin from './ChangeSkin.vue';
const router = useRouter();
const showStatus = ref(true);
const showHandle = () => {
  showStatus.value = !showStatus.value;
};
const barList = computed(() => BARLIST);
const clickSideBar = el => {
  router.push(`/${el.value}`);
};
onMounted(() => {});
</script>
<style lang="less" scoped>
.SideBar {
  width: 260px;
  height: 100%;
  padding: 8px;
  position: relative;
  transition: width 0.2s linear;
  .foldMenu {
    position: absolute;
    top: 0;
    right: 0;

    .iconfont {
      font-size: 28px;
    }
  }
  .header {
    height: 30%;
  }
  .content {
    height: 50%;
  }
  .footer {
    height: 20%;
  }
}
</style>
