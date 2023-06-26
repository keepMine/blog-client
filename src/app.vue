<template>
  <router-link to="/">home</router-link>
  <router-link to="/about">about</router-link>
  <router-view></router-view>
</template>

<script>
export default {
  setup() {
    const testFunc = () => {
      console.log('first', 1);
    };

    return {
      testFunc,
    };
  },
};
</script>

<style lang="less" scoped>
div {
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
