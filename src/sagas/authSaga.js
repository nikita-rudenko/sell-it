import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
  // signInActions
} from '../actions/authActions';
import { takeEvery, call, put } from 'redux-saga/effects';
import { postSignIn, postSignUp } from 'api-client/auth';

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
