<!-- 面包屑 -->
<template>
  <nav class="Breadcrumb bd-shadow">
    <div class="bg-box back cursor-p" @click="breadcrumbClick()">
      <i class="iconfont icon-return-solid"></i>
      返回上级
    </div>
  </nav>
</template>

<script setup>
import useSetRouters from '@hooks/useSetRouters.js';
const { goBack } = useSetRouters();

const breadcrumbClick = () => {
  goBack(-1);
};
</script>
<style lang="less" scoped>
.Breadcrumb {
  height: 32px;
  display: flex;
  width: fit-content;
  justify-content: flex-start;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;

  .breadcrumb-item {
    font-size: 14px;
    font-weight: 500;
    display: flex;

    .label {
      padding: 0 6px;
      cursor: pointer;
    }
    &::after {
      content: '>';
    }
    &:last-child {
      &::after {
        content: '';
      }
    }
  }
}
</style>
