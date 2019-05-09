import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  GET_DETAILS_REQUEST,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAILURE
} from '../actions/productActions';

import { getFetchProducts, getFetchDetails } from 'api-client/products';
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
