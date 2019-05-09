import { post } from './base';

export const postSignIn = data => {
  return post('login/', data);
};
