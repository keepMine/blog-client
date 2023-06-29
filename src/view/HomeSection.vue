<template>
  <div class="box">home</div>
  <img class="img" :src="imgUrl" />
  <img class="img" src="@/asset/images/321096.jpg" />
</template>

<script>
import img from '@/asset/images/2010619.jpg';
export default {
  data() {
    return {
      imgUrl: img,
    };
  },
  mounted() {
  },
  methods: {
 
  },
};
</script>

<style lang="less" scoped>
.box {
  color: black;
  background-image: url('@/asset/images/2010619.jpg');
  background-size: 50px 50px;
  width: 100%;
  height: 100%;
}
.img {
  width: 100%;
  height: 100%;
}
</style>
