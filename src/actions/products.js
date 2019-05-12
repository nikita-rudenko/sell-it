export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const GET_DETAILS_REQUEST = 'GET_DETAILS_REQUEST';
export const GET_DETAILS_SUCCESS = 'GET_DETAILS_SUCCESS';
export const GET_DETAILS_FAILURE = 'GET_DETAILS_FAILURE';
export const SEARCH_PRODUCTS_REQUEST = 'SEARCH_PRODUCTS_REQUEST';
export const SEARCH_PRODUCTS_SUCCESS = 'SEARCH_PRODUCTS_SUCCESS';
export const SEARCH_PRODUCTS_FAILURE = 'SEARCH_PRODUCTS_FAILURE';
export const ADD_NEW_PRODUCT_REQUEST = 'ADD_NEW_PRODUCT_REQUEST';
export const ADD_NEW_PRODUCT_SUCCESS = 'ADD_NEW_PRODUCT_SUCCESS';
export const ADD_NEW_PRODUCT_FAILURE = 'ADD_NEW_PRODUCT_FAILURE';

export const fetchProducts = () => ({ type: FETCH_PRODUCTS_REQUEST });

export const getDetails = id => ({ type: GET_DETAILS_REQUEST, payload: id });

export const searchProducts = query => ({
  type: SEARCH_PRODUCTS_REQUEST,
  payload: query
});

export const addNewProduct = data => ({
  type: ADD_NEW_PRODUCT_REQUEST,
  payload: data
});
