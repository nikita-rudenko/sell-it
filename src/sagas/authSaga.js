import {
  SIGN_IN_REQUEST,
  // SIGN_IN_SUCCESS,
  // SIGN_IN_FAILURE,
  SIGN_UP_REQUEST
  // SIGN_UP_SUCCESS,
  // SIGN_UP_FAILURE
} from '../actions/authActions';
// import axios from 'axios';
import { takeEvery } from 'redux-saga/effects';

export function* watchSignIn() {
  yield takeEvery(SIGN_IN_REQUEST, signIn);
}

export function* signIn(action) {
  yield console.log(action);
}

export function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

export function* signUp(action) {
  yield console.log(action);
}
