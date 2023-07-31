import { onMounted, ref } from 'vue';
import { getArticleList } from '@/api/article';
const useArticleList = () => {
  const list = ref([]);
  const getList = async params => {
    const { data } = await getArticleList(params);
    list.value = data;
  };

  onMounted(() => {
    getList();
  });
  const refetch = params => {
    getList(params);
  };
  return {
    list,
    refetch,
  };
};
export default useArticleList;
