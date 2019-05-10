import { post } from './base';

export const postSignIn = data => {
  return post('login/', data);
};

export const postSignUp = data => {
  return post('registration/', data);
};
