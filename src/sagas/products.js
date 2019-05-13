import {
  fetchProductsActions,
  getDetailsActions,
  searchProductsActions,
  addNewProductActions
} from '../actions/products';

import {
  getFetchProducts,
  getFetchDetails,
  getSearchProducts
} from 'api-client/products';

import { put, takeEvery, call } from 'redux-saga/effects';

export function* watchFetchProducts() {
  yield takeEvery(fetchProductsActions.request, fetchProducts);
}

export function* fetchProducts() {
  try {
    const result = yield call(getFetchProducts);
    yield put({
      type: fetchProductsActions.success,
      payload: result.data.data
    });
  } catch (error) {
    yield put({
      type: fetchProductsActions.failure,
      payload: error,
      meta: {
        printLog: true
      }
    });
  }
}

export function* watchGetDetails() {
  yield takeEvery(getDetailsActions.request, getDetails);
}

export function* getDetails(action) {
  try {
    const { payload } = action;
    const result = yield call(getFetchDetails, payload);
    yield put({
      type: getDetailsActions.success,
      payload: result.data
    });
  } catch (error) {
    yield put({
      type: getDetailsActions.failure,
      payload: error
    });
  }
}

export function* watchSearchProducts() {
  yield takeEvery(searchProductsActions.request, searchProducts);
}

export function* searchProducts(action) {
  try {
    const { payload } = action;
    const result = yield call(getSearchProducts, payload);

    yield put({
      type: searchProductsActions.success,
      payload: result.data.data
    });
  } catch (error) {
    yield put({
      type: searchProductsActions.failure,
      payload: error
    });
  }
}

export function* watchAddNewProduct() {
  yield takeEvery(addNewProductActions.request, addNewProduct);
}

export function* addNewProduct(action) {
  yield console.log(action);
}

export const productSagas = [
  watchFetchProducts(),
  watchGetDetails(),
  watchSearchProducts(),
  watchAddNewProduct()
];
