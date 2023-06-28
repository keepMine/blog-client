import axios from 'axios';
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 1000,
});
request.interceptors.request.use(
  config => {
    config.headers['Cache-Control'] = 'no-cache';
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  response => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    const res = response.data;
    return res;
  },
  error => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export default request;
