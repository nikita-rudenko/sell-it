import { all } from 'redux-saga/effects';

import {
  watchFetchProducts,
  watchGetDetails,
  watchSearchProducts
} from './productSaga';
import { watchSignIn, watchSignUp, watchSignOut } from './authSaga';
import { watchFetchProfileData } from './profileSaga';

export default function* rootSaga() {
  yield all([
    watchFetchProducts(),
    watchGetDetails(),
    watchSignIn(),
    watchSignUp(),
    watchFetchProfileData(),
    watchSignOut(),
    watchSearchProducts()
  ]);
}
