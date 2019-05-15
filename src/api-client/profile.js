import { get } from './base';

export const getFetchProfileData = headers => {
  return get('profile/', headers);
};

export const getFetchOwnProducts = headers => {
  return get('posters/own/', headers);
};
