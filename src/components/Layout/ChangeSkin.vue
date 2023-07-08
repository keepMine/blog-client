<!--  -->
<template>
  <div class="ChangeSkin">
    <div class="skin-list">
      <div
        v-for="skin in skinList"
        :key="skin.value"
        class="skin-item"
        :style="{ backgroundColor: skin.bg }"
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
    label: '春',
    value: 'spring',
    bg: '#e6fbe3',
  },
  {
    label: '夏',
    value: 'summer',
    bg: '#023047',
  },
  {
    label: '秋',
    value: 'autumn',
    bg: '#F5ECD7',
  },
  {
    label: '冬',
    value: 'winter',
    bg: '#E5E5E5',
  },
];
const setSkinEvent = item => {
  document.getElementsByTagName('body')[0].className = `base-style-${item}`;
};
</script>
<style lang="less" scoped>
.ChangeSkin {
  .skin-list {
    display: flex;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
    transition: transform 0.3s ease-in-out, box-shadow 0.5s ease-in-out;
    border-radius: 50%;
    &:hover {
      transform: scale(1.2);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    }
    .skin-item {
      width: 36px;
      height: 36px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #a49d9d;
      &:first-child {
        border-radius: 50% 0 0 50%;
      }
      &:last-child {
        border-radius: 0 50% 50% 0;
      }
    }
  }
}
</style>
