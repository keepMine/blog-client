<!-- 文章卡片 -->
<template>
  <div class="CardItem bd-shadow" @click="goToDetail(item.id)">
    <div class="content">
      <div class="title activeText ellipsis">{{ item.title }}</div>
      <div class="text ellipsis-2line">
        {{ item.description }}
      </div>
      <div class="footer">
        <span class="tips">{{ item.created_time }}</span>
        <span class="tips">浏览量：{{ item.browse }}</span>
      </div>
    </div>
    <div>
      <img class="image" :src="item.image_url" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

defineProps({
  item: Object,
});
const goToDetail = id => {
  router.push(`/detail/${id}`);
};
</script>
<style lang="less" scoped>
.CardItem {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  padding-left: 10px;

  margin-bottom: 18px;
  cursor: pointer;
  overflow: hidden;
  .content {
    padding: 20px 0;
    flex: 1;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    .title {
      font-size: 18px;
    }
    .text {
      font-size: 14px;
    }
    .tips {
      font-size: 12px;

      &:first-child {
        margin-right: 12px;
      }
    }
  }
  .image {
    width: 150px;
    height: 150px;
  }
}
</style>
