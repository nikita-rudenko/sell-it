import {
  SIGN_IN_REQUEST,
  // SIGN_IN_SUCCESS,
  // SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  AUTH_SUCCESS
  // SIGN_UP_SUCCESS,
  // SIGN_UP_FAILURE
  // signInActions
} from '../actions/authActions';
import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';

export function* watchSignIn() {
  // yield takeEvery(signInActions.request, signIn);
  yield takeEvery(SIGN_IN_REQUEST, signIn);
}

export function* signIn(action) {
  const res = call(
    axios.post,
    'http://light-it-04.tk/api/login/',
    action.payload
  );
  console.log(res.token);
  localStorage.setItem('token', res.token);
  yield put({ type: AUTH_SUCCESS });
}

export function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

export function* signUp(action) {
  yield console.log(action);
}
