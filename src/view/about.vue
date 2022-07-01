<template>
  <div @click="goToItem" class="box">about</div>
  <div>{{num}}---{{name}}</div>
  <button @click="add">add++</button>
  <button @click="de">decrement</button>
   <button @click="addAsyn">addAsync</button>
     <button @click="decrementAsyn">decrementAsync</button>
</template>

<script>
import utils from "utils/index"
import img from "@/asset/images/2010619.jpg"
import {mapState, mapMutations, mapActions,mapGetters} from "vuex"
export default {
  data() {
    return {
      imgUrl: img
    }
  },
  computed: {
    ...mapState([
      'num',
      'name'
    ]),
 
  },
  mounted() {
    // 获取第一个点击的坐标
    
  },
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ]),
    ...mapActions({
      addAsync: 'increment',
      decrementAsync: 'decrement'
    }),
    add() {
     // this.increment(3)
    },
    de() {
      this.decrement({num:5})
      console.log(this.$store.getters.getss(2))
    },
    addAsyn() {
      this.addAsync(7).then((val) => {
        if(val) {
          console.log('first',val)
        }
      })
      
    },
    decrementAsyn() {
      this.decrementAsync({num: 10})
    },
    goToItem() {
      this.$router.push('/')
    },
    // 自动连点器
    aotoClick() {
      var pointEl = []
    var frequency = 500
    alert('请先后点击需要连点的按钮，完成后按下回车键')
    document.onmousedown = (e) => {
      pointEl.push(e)
    }
     document.onkeyup = (e) => {
      if(e.code === "Enter") {
          if(!pointEl.length) return alert("你还未点击按钮")
          setInterval(()=>{
             pointEl.forEach((event,index) => {
               setTimeout(()=> {
                 var cc= document.elementFromPoint(event.clientX,event.clientY)
                 console.log(cc)
                  cc.click();
               },frequency*index)
          })
          },frequency*pointEl.length)
      }
    }
    }
  }
}
</script>

<style lang="less" scoped>
  .box{
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