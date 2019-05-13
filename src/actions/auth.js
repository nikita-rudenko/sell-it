import createAsyncActions from './createAsyncActions';

const identifier = '@@auth/';

// ACTIONS
export const signInActions = createAsyncActions(identifier, 'SIGN_IN');
export const signUpActions = createAsyncActions(identifier, 'SIGN_UP');
export const signOutActions = createAsyncActions(identifier, 'SIGN_OUT');
export const authUserActions = createAsyncActions(identifier, 'AUTH_USER');
export const resetErrorActions = createAsyncActions(identifier, 'RESET_ERROR');

// ACTION CREATORS
export const signIn = userData => ({
  type: signInActions.request,
  payload: userData
});

export const signUp = userData => ({
  type: signUpActions.request,
  payload: userData
});

export const signOut = () => ({
  type: signOutActions.request
});

export const authUser = token => ({
  type: authUserActions.request,
  payload: token
});

export const resetError = () => ({ type: resetErrorActions.request });
