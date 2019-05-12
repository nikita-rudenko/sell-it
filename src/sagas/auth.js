import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILURE
  // signInActions
} from '../actions/auth';
import { takeEvery, call, put } from 'redux-saga/effects';
import {
  postSignIn,
  postSignUp,
  getSignOut,
  postAuthUser
} from 'api-client/auth';

export function* watchSignIn() {
  // yield takeEvery(signInActions.request, signIn);
  yield takeEvery(SIGN_IN_REQUEST, signIn);
}

export function* signIn(action) {
  try {
    const res = yield call(postSignIn, action.payload);
    yield localStorage.setItem('token', res.data.token);
    yield put({ type: SIGN_IN_SUCCESS, payload: res.data.user });
  } catch (error) {
    yield put({ type: SIGN_IN_FAILURE, payload: error.response.data });
  }
}

export function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

export function* signUp(action) {
  try {
    const res = yield call(postSignUp, action.payload);
    yield localStorage.setItem('token', res.data.token);
    yield put({ type: SIGN_UP_SUCCESS, payload: res.data.user });
  } catch (error) {
    yield put({ type: SIGN_UP_FAILURE, payload: error.response.data });
  }
}

export function* watchSignOut() {
  yield takeEvery(SIGN_OUT_REQUEST, signOut);
}

export function* signOut() {
  try {
    yield call(getSignOut);
    yield localStorage.removeItem('token');
    yield put({ type: SIGN_OUT_SUCCESS });
  } catch (error) {
    yield put({ type: SIGN_OUT_FAILURE, payload: error.response.data });
  }
}

export function* watchAuthUser() {
  yield takeEvery(AUTH_USER_REQUEST, authUser);
}

export function* authUser() {
  try {
    const token = yield localStorage.getItem('token');
    const data = { token: token };

    yield call(postAuthUser, data);

    yield put({ type: AUTH_USER_SUCCESS });
  } catch (error) {
    yield put({ type: AUTH_USER_FAILURE });
  }
}

export const authSagas = [
  watchSignIn(),
  watchSignUp(),
  watchSignOut(),
  watchAuthUser()
];
