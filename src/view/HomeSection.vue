<template>
  <div class="box">home</div>
  <img class="img" :src="imgUrl" />
  <img class="img" src="@/asset/images/321096.jpg" />
  <img class="img" src="@/asset/icon/send.png" />
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
    // 获取第一个点击的坐标
  },
  methods: {
    // 自动连点器
    aotoClick() {
      var pointEl = [];
      var frequency = 500;
      alert('请先后点击需要连点的按钮，完成后按下回车键');
      document.onmousedown = e => {
        pointEl.push(e);
      };
      document.onkeyup = e => {
        if (e.code === 'Enter') {
          if (!pointEl.length) return alert('你还未点击按钮');
          setInterval(() => {
            pointEl.forEach((event, index) => {
              setTimeout(() => {
                var cc = document.elementFromPoint(event.clientX, event.clientY);
                cc.click();
              }, frequency * index);
            });
          }, frequency * pointEl.length);
        }
      };
    },
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
