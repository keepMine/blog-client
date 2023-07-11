<!--  -->
<template>
  <div class="BackTop activeBaseContentBg" @click="backTop">
    <i class="iconfont icon-top"></i>
  </div>
</template>

<script setup>
const emits = defineEmits(['backTop']);
const backTop = () => {
  emits('backTop');
};
</script>
<style lang="less" scoped>
.BackTop {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #f1404b;
    transition: all 0.2s ease-in-out;
  }
  &:hover .iconfont {
    transform: scale(1.4);
    transform: translateY(-8px);
    transition: all 0.2s ease-in-out;
  }

  .iconfont {
    font-size: 24px;

    color: #fff;
  }
}
</style>
