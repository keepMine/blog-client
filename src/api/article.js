import { post, get } from '@utils/http';
const baseUrl = '/api/v1/article';
export const getArticleList = params => {
  return post(`${baseUrl}/list`, params);
};

export const getArticleDetail = params => {
  return get(`${baseUrl}/detail/${params.id}`, params);
};
