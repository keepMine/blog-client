<!--  -->
<template>
  <div>
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
      <div class="detail-content" v-html="detail.content" />
      <footer>
        <div v-if="detail.category_info" class="flex-s">
          <span class="circle-des">类别：</span>
          <div class="bg-box">{{ detail.category_info.name }}</div>
        </div>
      </footer>
    </div>
    <div class="list mt-26">
      <div class="content-title mb-16">
        <i class="iconfont icon-24gl-tags4" />
        相关文章
      </div>
      <List :list="filteredList">
        <template #default="{ item }">
          <CardItem :item="item" />
        </template>
      </List>
    </div>
  </div>
</template>

<script setup>
import { getArticleDetail } from '@/api/article';
import { onMounted, ref, watchEffect, watch } from 'vue';
import { useRoute } from 'vue-router';
import useArticleList from '@hooks/useArticleList.js';
const route = useRoute();
const detail = ref({});
const { filteredList, refetch } = useArticleList({
  init: false,
  filterFunc: el => el.id !== detail.value.id,
});
const getDetail = async id => {
  if (!id) return;
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
};
watchEffect(async () => {
  await getDetail(route.params.id);
});
watch(detail, () => refetch({ category_id: detail.value.category_info.id }));

onMounted(() => {
  setTimeout(() => {
    setCodeIconsHandle();
  }, 1000);
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
  .detail-content {
    min-height: 50vh;
  }
}
.iconfont {
  font-size: 24px !important;
}
</style>
