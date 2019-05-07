// const identifier = '@@auth/';

// export const signInActions = createAsyncActions(identifier, 'SIGN_IN');

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';

export const signIn = userData => ({
  type: SIGN_IN_REQUEST,
  payload: userData
});

export const signUp = userData => ({
  type: SIGN_UP_REQUEST,
  payload: userData
});

// const createAsyncActions = (prefix, name) => ({
//   request: `${prefix}${name}_REQUEST`,
//   sucess: `${prefix}${name}_SUCCESS`,
//   failure: `${prefix}${name}_FAILURE`
// });
