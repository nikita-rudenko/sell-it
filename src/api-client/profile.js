import { get } from './base';

export const getProfileData = headers => {
  return get('profile/', headers);
};
