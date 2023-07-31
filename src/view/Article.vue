<!--  -->
<template>
  <div class="Article">
    <List :list="list">
      <template #default="{ item }">
        <CardItem :item="item" />
      </template>
    </List>
  </div>
</template>

<script setup>
import useArticleList from '@hooks/useArticleList.js';
const { list } = useArticleList();
</script>
<style lang="less" scoped>
.Article {
}
</style>
