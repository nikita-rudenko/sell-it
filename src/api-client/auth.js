import { get, post } from './base';

export const postSignIn = data => {
  return post('login/', data);
};

export const postSignUp = data => {
  return post('registration/', data);
};

export const getSignOut = () => {
  return get('logout/');
};

export const postAuthUser = token => {
  return post('token-verify/', token);
};
