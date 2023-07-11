<!-- 列表容器 -->
<template>
  <div v-for="(item, index) in list" :key="index" class="List">
    <slot :item="item"></slot>
  </div>
</template>

<script setup>
defineProps({
  list: Array,
});
</script>
<style lang="less" scoped>
.List {
}
</style>
