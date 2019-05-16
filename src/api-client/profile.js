import { get, deleteM } from './base';

export const getFetchProfileData = headers => {
  return get('profile/', headers);
};

export const getFetchOwnProducts = headers => {
  return get('posters/own/', headers);
};

export const deleteMDeleteOwnProduct = (id, headers) => {
  return deleteM(`posters/${id}/`, headers);
};
