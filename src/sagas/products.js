import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  GET_DETAILS_REQUEST,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAILURE,
  SEARCH_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_FAILURE
} from '../actions/products';

import {
  getFetchProducts,
  getFetchDetails,
  getSearchProducts
} from 'api-client/products';
import { put, takeEvery, call } from 'redux-saga/effects';

export function* watchFetchProducts() {
  yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProducts);
}

export function* fetchProducts() {
  try {
    const result = yield call(getFetchProducts);
    yield put({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: result.data.data
    });
  } catch (error) {
    yield put({
      type: FETCH_PRODUCTS_FAILURE,
      payload: error,
      meta: {
        printLog: true
      }
    });
  }
}

export function* watchGetDetails() {
  yield takeEvery(GET_DETAILS_REQUEST, getDetails);
}

export function* getDetails(action) {
  try {
    const { payload } = action;
    const result = yield call(getFetchDetails, payload);
    yield put({
      type: GET_DETAILS_SUCCESS,
      payload: result.data
    });
  } catch (error) {
    yield put({
      type: GET_DETAILS_FAILURE,
      payload: error
    });
  }
}

export function* watchSearchProducts() {
  yield takeEvery(SEARCH_PRODUCTS_REQUEST, searchProducts);
}

export function* searchProducts(action) {
  try {
    const { payload } = action;
    const result = yield call(getSearchProducts, payload);
    console.log(result);
    yield put({
      type: SEARCH_PRODUCTS_SUCCESS,
      payload: result.data.data
    });
  } catch (error) {
    yield put({
      type: SEARCH_PRODUCTS_FAILURE,
      payload: error
    });
  }
}

export const productSagas = [
  watchFetchProducts(),
  watchGetDetails(),
  watchSearchProducts()
];