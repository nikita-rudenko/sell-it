import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  GET_DETAILS_REQUEST,
  GET_DETAILS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  GET_DETAILS_FAILURE
} from '../actions/productActions';

const initialState = {
  isFetching: false,
  productList: [],
  details: null,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, isFetching: true };

    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, productList: action.payload, isFetching: false };

    case FETCH_PRODUCTS_FAILURE:
      return { ...state, error: action.payload };

    case GET_DETAILS_REQUEST:
      return { ...state, isFetching: true };

    case GET_DETAILS_SUCCESS:
      return { ...state, details: action.payload, isFetching: false };

    case GET_DETAILS_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
