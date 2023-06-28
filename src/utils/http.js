import request from './request';

export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    request
      .get(url, {
        params,
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const post = (url, params) => {
  return new Promise((resolve, reject) => {
    request
      .post(url, {
        params,
      })
      .then(val => {
        resolve(val.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
