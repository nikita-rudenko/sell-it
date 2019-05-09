import axios from 'axios';

const API_URL = 'http://light-it-04.tk/api/';

function request({ method, url, data }) {
  return axios({
    method,
    url: `${API_URL}${url}`,
    data
  });
}

export const get = path => {
  return request({
    method: 'GET',
    url: path
  });
};

export const post = (path, data) => {
  return request({
    method: 'POST',
    url: path,
    data
  });
};
