import axios from 'axios';

const API_URL = 'http://light-it-04.tk/api/';

function request({ method, url, data, headers }) {
  console.log(method, url, data, headers);
  return axios({
    method,
    url: `${API_URL}${url}`,
    data,
    headers
  });
}

export const get = (path, headers) => {
  return request({
    method: 'GET',
    url: path,
    headers
  });
};

export const post = (path, data, headers) => {
  return request({
    method: 'POST',
    url: path,
    data,
    token: data,
    headers
  });
};

export const deleteM = (path, headers) => {
  return request({
    method: 'DELETE',
    url: path,
    headers
  });
};
