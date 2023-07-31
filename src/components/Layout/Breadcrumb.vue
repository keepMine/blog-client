<!-- 面包屑 -->
<template>
  <nav class="Breadcrumb">
    <!-- <div class="breadcrumb-item" v-for="(el, index) in lists" :key="index">
      <div @click="breadcrumbClick(el)">
        <span class="label">{{ el.label }}</span>
      </div>
    </div> -->
    <div class="bg-box back code-icon" @click="breadcrumbClick()">
      <i class="iconfont icon-return-solid"></i>
      返回上级
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
// import { useStore } from 'vuex';
// const store = useStore();
const router = useRouter();

defineProps({
  list: Array,
});
// const lists = [{ label: '首页' }, { label: '首页' }, { label: '首页' }];
const breadcrumbClick = el => {
  console.log(el);
  router.go(-1);
};
</script>
<style lang="less" scoped>
.Breadcrumb {
  height: 32px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

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
