import { post } from '@utils/http';
const baseUrl = '/api/v1/article';
export const getArticleList = () => {
  return post(`${baseUrl}/list`);
};
