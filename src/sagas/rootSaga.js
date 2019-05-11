import { all } from 'redux-saga/effects';

import { productSagas } from './products';
import { authSagas } from './auth';
import { watchFetchProfileData } from './profile';

export default function* rootSaga() {
  yield all([...productSagas, ...authSagas, watchFetchProfileData()]);
}
