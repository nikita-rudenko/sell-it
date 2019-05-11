import { get } from './base';

export const getFetchProducts = () => {
  return get('/posters');
};

export const getFetchDetails = id => {
  return get('/posters/' + id);
};

export const getSearchProducts = query => {
  return get('/posters/?search=' + query);
};
