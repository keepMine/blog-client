<!--  -->
<template>
  <div class="ChangeSkin">
    <div class="skin-list">
      <div
        v-for="skin in skinList"
        :key="skin.value"
        class="skin-item"
        @click="setSkinEvent(skin.value)"
      >
        {{ skin.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
const skinList = [
  {
    label: '春天的草地',
    value: 'spring',
  },
  {
    label: '夏天的夜晚',
    value: 'summer',
  },
  {
    label: '秋天的树林',
    value: 'autumn',
  },
  {
    label: '冬天的雪花',
    value: 'winter',
  },
];
const setSkinEvent = item => {
  document.getElementsByTagName('body')[0].className = `base-style-${item}`;
};
</script>
<style lang="less" scoped>
.ChangeSkin {
  .skin-list {
    display: grid;
    grid-gap: 6px;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
    .skin-item {
      width: 100px;
      height: 100px;
      border: 1px solid #7c7878;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
