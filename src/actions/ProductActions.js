export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const GET_DETAILS = 'GET_DETAILS';
export const SET_PRODUCT_ID = 'SET_PRODUCT_ID';

export const fetchProducts = () => dispatch =>
  fetch('http://light-it-04.tk/api/posters/')
    .then(res => res.json())
    .then(productList =>
      dispatch({
        type: FETCH_PRODUCTS,
        payload: productList
      })
    );

export const getDetails = id => dispatch =>
  fetch(`http://light-it-04.tk/api/posters/${id}`)
    .then(res => res.json())
    .then(details =>
      dispatch({
        type: GET_DETAILS,
        payload: details
      })
    );

export const setProductID = id => dispatch =>
  dispatch({ type: SET_PRODUCT_ID, payload: id });
