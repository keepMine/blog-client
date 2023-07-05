<!--  -->
<template>
  <div class="ChangeSkin">
    <button @click="setThemeEvent('autumn')">ChangeSkin</button>
  </div>
</template>

<script setup>
const setThemeEvent = item => {
  document.getElementsByTagName('body')[0].className = `base-style-${item}`;
};
</script>
<style lang="less" scoped>
.ChangeSkin {
}
</style>
