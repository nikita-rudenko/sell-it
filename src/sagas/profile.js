import {
  fetchProfileDataActions,
  fetchOwnProductsActions,
  deleteOwnProductActions
} from '../actions/profile';

import { call, put, takeEvery } from 'redux-saga/effects';
import {
  getFetchProfileData,
  getFetchOwnProducts,
  deleteMDeleteOwnProduct
} from '../api-client/profile';

function* watchFetchProfileData() {
  yield takeEvery(fetchProfileDataActions.request, fetchProfileData);
}

function* fetchProfileData() {
  try {
    const token = yield localStorage.getItem('token');
    const headers = { Authorization: `JWT ${token}` };

    const result = yield call(getFetchProfileData, headers);
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

function* watchFetchOwnProducts() {
  yield takeEvery(fetchOwnProductsActions.request, fetchOwnProducts);
}

function* fetchOwnProducts() {
  try {
    const token = yield localStorage.getItem('token');
    const headers = { Authorization: `JWT ${token}` };

    const result = yield call(getFetchOwnProducts, headers);
    yield put({
      type: fetchOwnProductsActions.success,
      payload: result.data.data
    });
  } catch (error) {
    yield put({
      type: fetchOwnProductsActions.failure,
      payload: error,
      meta: {
        printLog: true
      }
    });
  }
}

function* watchDeleteOwnProduct() {
  yield takeEvery(deleteOwnProductActions.request, deleteOwnProduct);
}

function* deleteOwnProduct(action) {
  try {
    const token = yield localStorage.getItem('token');
    const headers = { Authorization: `JWT ${token}` };

    const id = action.payload;

    yield call(deleteMDeleteOwnProduct, id, headers);
    yield put({
      type: deleteOwnProductActions.success
    });
  } catch (error) {
    yield put({
      type: deleteOwnProductActions.failure,
      payload: error,
      meta: {
        printLog: true
      }
    });
  }
}

export const profileSagas = [
  watchFetchProfileData(),
  watchFetchOwnProducts(),
  watchDeleteOwnProduct()
];
