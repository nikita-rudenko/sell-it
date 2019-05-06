import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  GET_DETAILS_REQUEST,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAILURE
} from '../actions/productActions';

import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';

export function* watchFetchProducts() {
  yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProducts);
}

export function* fetchProducts() {
  try {
    const result = yield call(axios.get, 'http://light-it-04.tk/api/posters/');
    yield put({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: result.data,
      meta: {
        printLog: true
      }
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
    const { id } = action;
    const link = 'http://light-it-04.tk/api/posters/' + id;
    const result = yield call(axios.get, link);
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
