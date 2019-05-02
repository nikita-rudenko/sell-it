import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS
} from '../actions/ProductActions';
import axios from 'axios';
import { put, takeEvery, call, all } from 'redux-saga/effects';

export function* watchFetchProducts() {
  yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProducts);
}

export function* fetchProducts() {
  const result = yield call(axios.get, 'http://light-it-04.tk/api/posters/');
  yield put({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: result.data,
    meta: {
      printLog: true
    }
  });
}

export default function* rootSaga() {
  yield all([watchFetchProducts()]);
}
