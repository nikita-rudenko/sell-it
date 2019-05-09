import {
  FETCH_PROFILE_DATA_REQUEST,
  FETCH_PROFILE_DATA_SUCCESS,
  FETCH_PROFILE_DATA_FAILURE
} from '../actions/profileActions';

import { put, takeEvery } from 'redux-saga/effects';

export function* watchFetchProfileData() {
  yield takeEvery(FETCH_PROFILE_DATA_REQUEST, fetchProfileData);
}

export function* fetchProfileData() {
  try {
    const result = 'Kim Evans';
    yield put({
      type: FETCH_PROFILE_DATA_SUCCESS,
      payload: result,
      meta: {
        printLog: true
      }
    });
  } catch (error) {
    yield put({
      type: FETCH_PROFILE_DATA_FAILURE,
      payload: error,
      meta: {
        printLog: true
      }
    });
  }
}
