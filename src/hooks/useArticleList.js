import { onMounted, ref, computed } from 'vue';
import { getArticleList } from '@/api/article';
/**
 * @param query
 *  @param query.init
 *  *  @param query.filterFunc
 */
const useArticleList = (query = { init: true, filterFunc: () => {} }) => {
  const list = ref([]);
  const getList = async params => {
    const { data } = await getArticleList(params);
    list.value = data;
  };

  onMounted(() => {
    if (query.init) {
      getList();
    }
  });
  const filteredList = computed(() => list.value.filter(query.filterFunc));
  const refetch = params => {
    getList(params);
  };
  return {
    list,
    refetch,
    filteredList,
  };
};
export default useArticleList;
