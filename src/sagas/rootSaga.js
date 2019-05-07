import { all } from 'redux-saga/effects';

import { watchFetchProducts, watchGetDetails } from './productSaga';
import { watchSignIn, watchSignUp } from './authSaga';
import { watchFetchProfileData } from './profileSaga';

export default function* rootSaga() {
  yield all([
    watchFetchProducts(),
    watchGetDetails(),
    watchSignIn(),
    watchSignUp(),
    watchFetchProfileData()
  ]);
}
