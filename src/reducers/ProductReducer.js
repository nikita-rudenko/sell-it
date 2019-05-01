import {
  FETCH_PRODUCTS,
  GET_DETAILS,
  SET_PRODUCT_ID
} from '../actions/ProductActions';

const initialState = {
  isFetching: true,
  productList: [],
  productID: null,
  details: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, productList: action.payload, isFetching: false };

    case GET_DETAILS:
      return { ...state, details: action.payload, isFetching: false };

    case SET_PRODUCT_ID:
      return { ...state, productID: action.payload, isFetching: false };

    default:
      return state;
  }
}
