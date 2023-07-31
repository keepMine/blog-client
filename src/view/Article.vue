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
import { onMounted, ref } from 'vue';
import CardItem from '@layout/CardItem.vue';
import { getArticleList } from '@/api/article';
const list = ref([]);
const getList = async () => {
  const { data } = await getArticleList();
  list.value = data;
};

onMounted(() => {
  getList();
});
</script>
<style lang="less" scoped>
.Article {
}
</style>
