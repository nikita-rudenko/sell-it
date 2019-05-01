import axios from 'axios';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const GET_DETAILS_REQUEST = 'GET_DETAILS_REQUEST';
export const GET_DETAILS_SUCCESS = 'GET_DETAILS_SUCCESS';
export const SET_PRODUCT_ID = 'SET_PRODUCT_ID';

export const fetchProducts = () => dispatch => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });

  axios.get('http://light-it-04.tk/api/posters/').then(res => {
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: res.data
    });
  });
};

export const getDetails = id => dispatch => {
  dispatch({ type: GET_DETAILS_REQUEST });
  axios.get(`http://light-it-04.tk/api/posters/${id}`).then(res => {
    dispatch({
      type: GET_DETAILS_SUCCESS,
      payload: res.data
    });
  });
};

export const setProductID = id => dispatch =>
  dispatch({ type: SET_PRODUCT_ID, payload: id });
