<!--  -->
<template>
  <section class="section">
    <SideBar />
    <section class="content" @scroll="scroll">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in" appear>
          <component :is="Component" />
        </transition>
      </router-view>
    </section>
    <BackTop v-show="visiable" class="backTop" @backTop="backTop" />
  </section>
</template>

<script setup>
import SideBar from '@layout/SideBar.vue';
import BackTop from '@layout/BackTop.vue';
import { ref } from 'vue';
const visiable = ref(false);
const targetDom = ref(null);
// 监听scroll
const scroll = val => {
  const top = val.target.scrollTop;
  targetDom.value = val.target;
  if (top > 20) {
    visiable.value = true;
  } else {
    visiable.value = false;
  }
};
const backTop = () => {
  targetDom.value.scrollTop = 0;
};
</script>
<style lang="less" scoped>
.section {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  height: 100%;
  position: relative;
  .content {
    width: 100%;
    padding: 16px;
    height: 100%;
    overflow: scroll;
    box-sizing: border-box;
  }
  .backTop {
    position: fixed;
    bottom: 20px;
    right: 20px;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    transform: translateX(30px);
    opacity: 0;
  }
}
</style>
