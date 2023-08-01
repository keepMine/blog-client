<!-- 侧边栏详情 -->
<template>
  <div class="SideContentLarge">
    <div class="header">
      <div class="anvator-box">
        <img class="anvator" src="@asset/images/wolf.svg" />
        <div class="text">{{ name }}</div>
        <div class="tips">{{ description }}</div>
      </div>
    </div>
    <div class="content">
      <div
        v-for="el in barList"
        :key="el.value"
        class="sideBar-item"
        @click="clickSideBar(el)"
      >
        <div
          class="icon-box baseContentBg"
          :class="active.value === el.value && 'activeBaseContentBg'"
        >
          <i class="iconfont" :class="el.meta.icon"></i>
        </div>

        <span class="tips" :class="active.value === el.value && 'text'">{{
          el.label
        }}</span>
      </div>
    </div>
    <div class="footer">
      <ChangeSkin />
    </div>
  </div>
</template>

<script setup>
const { name, description } = require('@global/setting');
import ChangeSkin from './ChangeSkin.vue';
import { computed, ref, onMounted } from 'vue';
import { BARLIST } from '@constants/sideBar';
import useSetRouters from '@hooks/useSetRouters.js';
import { setIntoSession, getIntoSession } from '@utils/index';
const barList = computed(() => BARLIST);
const active = ref('');
const { pushRoute, replaceRoute, getRouterIntoSession } = useSetRouters();
const clickSideBar = el => {
  active.value = el;
  pushRoute(`/${el.value}`);
  setIntoSession('activeSidebar', el);
};
onMounted(() => {
  const sideBar = getIntoSession('activeSidebar');
  replaceRoute(getRouterIntoSession());
  active.value = sideBar || barList.value[0];
});
</script>
<style lang="less" scoped>
.SideContentLarge {
  height: 100%;
  width: 260px;

  .header {
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .anvator-box {
      text-align: center;
      .anvator {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        transition: transform 0.8s ease-in-out;
        &:hover {
          transform: rotate(720deg) scale(1.2);
        }
      }
      .text {
        font-size: 18px;
      }
      .tips {
        font-size: 12px;
      }
    }
  }
  .content {
    height: 50%;
    padding: 32px;
    .sideBar-item {
      display: flex;
      height: 36px;
      align-items: center;
      margin-bottom: 24px;
      cursor: pointer;
      &:hover {
        //  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        transform: scale(1.2) skew(15deg);
      }
      .icon-box {
        margin-right: 16px;
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;

        .iconfont {
          font-size: 24px;
        }
      }
    }
  }
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .tips {
      font-size: 12px;
      margin-top: 6px;
    }
  }
}
</style>
