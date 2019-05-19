import {
  fetchProductsActions,
  getDetailsActions,
  searchProductsActions,
  addNewProductActions,
  resetSuccessActions
} from '../actions/products';

const initialState = {
  isFetching: false,
  productList: null,
  details: null,
  error: null,
  addNewSuccess: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case fetchProductsActions.request:
      return { ...state, isFetching: true };

    case fetchProductsActions.success:
      return { ...state, productList: action.payload, isFetching: false };

    case fetchProductsActions.failure:
      return { ...state, isFetching: false, error: action.payload };

    case getDetailsActions.request:
      return { ...state, isFetching: true };

    case getDetailsActions.success:
      return { ...state, details: action.payload, isFetching: false };

    case getDetailsActions.failure:
      return { ...state, isFetching: false, error: action.payload };

    case searchProductsActions.request:
      return { ...state, isFetching: true };

    case searchProductsActions.success:
      return { ...state, productList: action.payload, isFetching: false };

    case searchProductsActions.failure:
      return { ...state, isFetching: false, error: action.payload };

    case addNewProductActions.request:
      return { ...state, isFetching: true };

    case addNewProductActions.success:
      return { ...state, isFetching: false, addNewSuccess: true };

    case addNewProductActions.failure:
      return { ...state, isFetching: false, error: action.payload };

    case resetSuccessActions.request:
      return { ...state, addNewSuccess: false };

    default:
      return state;
  }
}
