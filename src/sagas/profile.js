import {
  FETCH_PROFILE_DATA_REQUEST,
  FETCH_PROFILE_DATA_SUCCESS,
  FETCH_PROFILE_DATA_FAILURE
} from '../actions/profile';

import { call, put, takeEvery } from 'redux-saga/effects';
import { getProfileData } from '../api-client/profile';

export function* watchFetchProfileData() {
  yield takeEvery(FETCH_PROFILE_DATA_REQUEST, fetchProfileData);
}

export function* fetchProfileData() {
  try {
    const token = yield localStorage.getItem('token');
    const headers = { Authorization: `JWT ${token}` };

    const result = yield call(getProfileData, headers);
    yield put({
      type: FETCH_PROFILE_DATA_SUCCESS,
      payload: result.data,
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
