import {
  signInActions,
  signUpActions,
  signOutActions,
  authUserActions
} from '../actions/auth';
import { takeEvery, call, put } from 'redux-saga/effects';
import {
  postSignIn,
  postSignUp,
  getSignOut,
  postAuthUser
} from 'api-client/auth';

export function* watchSignIn() {
  yield takeEvery(signInActions.request, signIn);
}

export function* signIn(action) {
  try {
    const res = yield call(postSignIn, action.payload);
    yield localStorage.setItem('token', res.data.token);
    yield put({ type: signInActions.success, payload: res.data.user });
  } catch (error) {
    yield put({ type: signInActions.failure, payload: error.response.data });
  }
}

export function* watchSignUp() {
  yield takeEvery(signUpActions.request, signUp);
}

export function* signUp(action) {
  try {
    const res = yield call(postSignUp, action.payload);
    yield localStorage.setItem('token', res.data.token);
    yield put({ type: signUpActions.success, payload: res.data.user });
  } catch (error) {
    yield put({ type: signUpActions.success, payload: error.response.data });
  }
}

export function* watchSignOut() {
  yield takeEvery(signOutActions.request, signOut);
}

export function* signOut() {
  try {
    localStorage.removeItem('token');
    yield call(getSignOut);
    yield put({ type: signOutActions.success });
  } catch (error) {
    yield put({ type: signOutActions.failure, payload: error.response.data });
  }
}

export function* watchAuthUser() {
  yield takeEvery(authUserActions.request, authUser);
}

export function* authUser() {
  try {
    const token = yield localStorage.getItem('token');
    const data = { token: token };

    yield call(postAuthUser, data);

    yield put({ type: authUserActions.success });
  } catch (error) {
    yield put({ type: authUserActions.failure });
  }
}

export const authSagas = [
  watchSignIn(),
  watchSignUp(),
  watchSignOut(),
  watchAuthUser()
];
