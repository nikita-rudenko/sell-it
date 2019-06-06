import {
  fetchProductsActions,
  getDetailsActions,
  searchProductsActions,
  addNewProductActions
} from '../actions/products';

import {
  getFetchProducts,
  getFetchDetails,
  getSearchProducts,
  postAddNewProduct
} from 'api-client/products';

import { put, takeEvery, call } from 'redux-saga/effects';

export function* watchFetchProducts() {
  yield takeEvery(fetchProductsActions.request, fetchProducts);
}

export function* fetchProducts(action) {
  try {
    const { payload } = action;
    const result = yield call(getFetchProducts, payload);
    yield put({
      type: fetchProductsActions.success,
      payload: result.data
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
  try {
    const { payload: data } = action;
    console.log(data);

    const token = yield localStorage.getItem('token');
    const headers = { Authorization: `JWT ${token}` };

    yield call(postAddNewProduct, data, headers);
    yield put({
      type: addNewProductActions.success
    });
  } catch (error) {
    yield put({
      type: addNewProductActions.failure
    });
  }
}

export const productSagas = [
  watchFetchProducts(),
  watchGetDetails(),
  watchSearchProducts(),
  watchAddNewProduct()
];
