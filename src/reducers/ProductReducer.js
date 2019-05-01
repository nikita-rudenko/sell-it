import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  GET_DETAILS_REQUEST,
  GET_DETAILS_SUCCESS,
  SET_PRODUCT_ID
} from '../actions/ProductActions';

const initialState = {
  isFetching: false,
  productList: [],
  productID: null,
  details: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, isFetching: true };

    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, productList: action.payload, isFetching: false };

    case GET_DETAILS_REQUEST:
      return { ...state, isFetching: true };

    case GET_DETAILS_SUCCESS:
      return { ...state, details: action.payload, isFetching: false };

    case SET_PRODUCT_ID:
      return { ...state, productID: action.payload };

    default:
      return state;
  }
}
