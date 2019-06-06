import { get, post } from './base';

export const getFetchProducts = (page = 1) => {
  return get('/posters/?page=' + page);
};

export const getFetchDetails = id => {
  return get('/posters/' + id);
};

export const getSearchProducts = query => {
  return get('/posters/?search=' + query);
};

export const postAddNewProduct = (data, headers) => {
  return post('/posters/', data, headers);
};
