<!--  -->
<template>
  <div v-if="detail" class="ArticleContent">
    <Breadcrumb />
    <header>
      <h1 class="title flex-c">
        {{ detail.title }}
      </h1>
      <div class="flex-c">
        <span class="mr-16 circle-des">{{ detail.created_time }} </span>
        <span class="circle-des">阅读 {{ detail.browse }} 次</span>
      </div>
      <div class="my-16 line-des des">
        {{ detail.description }}
      </div>
    </header>
    <div v-html="detail.content" />
    <footer>
      <div v-if="detail.category_info" class="flex-s">
        <span class="circle-des">类别：</span>
        <div class="bg-box">{{ detail.category_info.name }}</div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { getArticleDetail } from '@/api/article';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const detail = ref({});
const getDetail = async id => {
  const params = {
    id,
    is_markdown: true,
  };
  const data = await getArticleDetail(params);
  detail.value = data;
};
const setCodeIconsHandle = () => {
  const downDomList = document.getElementsByClassName('code-icon');
  for (let index = 0; index < downDomList.length; index++) {
    downDomList[index].addEventListener('click', e => {
      if (e.target.className.includes('icon-down')) {
        e.target.className = 'iconfont code-icon icon-right';
        e.target.parentNode.nextElementSibling.className = 'fold';
        e.target.parentNode.className = 'code-header-handle';
      } else {
        e.target.className = 'iconfont code-icon icon-down';
        e.target.parentNode.nextElementSibling.className = '';
        e.target.parentNode.className = 'code-header-handle bdb-shadow';
      }
    });
  }
  // const copyCodeNodeList = document.getElementsByClassName('copy-code-node');
  // for (let index = 0; index < copyCodeNodeList.length; index++) {
  //   copyCodeNodeList[index].addEventListener('click', e => {});
  // }
};
onMounted(() => {
  setTimeout(() => {
    setCodeIconsHandle();
  }, 1000);

  getDetail(route.params.id);
});
</script>
<style lang="less" scoped>
.ArticleContent {
  position: relative;
  min-height: 100%;
  height: fit-content;
  padding-bottom: 35px;
  box-sizing: border-box;
  footer {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
