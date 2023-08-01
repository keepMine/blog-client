<!-- 换肤 -->
<template>
  <div class="ChangeSkin">
    <div class="skin-list">
      <div
        v-for="skin in skinList"
        :key="skin.value"
        class="skin-item"
        :class="activeSkin === skin.value && 'active'"
        :style="{ backgroundColor: skin.bg }"
        @click="setSkinEvent(skin.value)"
      >
        {{ skin.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
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
const activeSkin = ref('');
const setSkinEvent = item => {
  activeSkin.value = item;
  localStorage.setItem('activeSkin', JSON.stringify(item));
  document.getElementsByTagName('body')[0].className = `base-style-${item}`;
};
onMounted(() => {
  const activeSkin = JSON.parse(localStorage.getItem('activeSkin')) || 'spring';

  setSkinEvent(activeSkin);
});
</script>
<style lang="less" scoped>
.ChangeSkin {
  .skin-list {
    display: flex;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);

    border-radius: 50%;

    .skin-item {
      width: 36px;
      height: 36px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #a49d9d;
      transition: transform 0.3s ease-in-out, box-shadow 0.5s ease-in-out;
      &:hover {
        transform: scale(1.2);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
      }
      &:first-child {
        border-radius: 50% 0 0 50%;
      }
      &:last-child {
        border-radius: 0 50% 50% 0;
      }
    }
    .active {
      transform: scale(1.2);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    }
  }
}
</style>
