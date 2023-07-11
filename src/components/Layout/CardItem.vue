<!-- 文章卡片 -->
<template>
  <div class="CardItem bd-shadow">
    <div class="content">
      <div class="title activeText ellipsis">{{ item.title }}</div>
      <div class="text ellipsis-2line">
        在日常运维中, 经常遇到这样的情况:
        需要在系统中安装多个Python版本，即需要实现Python的多版本环境共存，pyenv是个不错的工具。
      </div>
      <div class="footer">
        <span class="tips">2023-05-11 11:11:22</span>
        <span class="tips">浏览量：1000</span>
      </div>
    </div>
    <div class="image"></div>
  </div>
</template>

<script setup>
defineProps({
  item: Object,
});
</script>
<style lang="less" scoped>
.CardItem {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  padding: 20px 10px;

  margin-bottom: 18px;
  cursor: pointer;
  overflow: hidden;
  .content {
    flex: 1;
    height: 100%;
    display: flex;
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
