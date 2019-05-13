import { fetchProfileDataActions } from '../actions/profile';

import { call, put, takeEvery } from 'redux-saga/effects';
import { getProfileData } from '../api-client/profile';

export function* watchFetchProfileData() {
  yield takeEvery(fetchProfileDataActions.request, fetchProfileData);
}

export function* fetchProfileData() {
  try {
    const token = yield localStorage.getItem('token');
    const headers = { Authorization: `JWT ${token}` };

    const result = yield call(getProfileData, headers);
    yield put({
      type: fetchProfileDataActions.success,
      payload: result.data
    });
  } catch (error) {
    yield put({
      type: fetchProfileDataActions.failure,
      payload: error,
      meta: {
        printLog: true
      }
    });
  }
}
