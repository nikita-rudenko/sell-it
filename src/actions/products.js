import createAsyncActions from './createAsyncActions';

const identifier = '@@prod/';

// ACTIONS
export const fetchProductsActions = createAsyncActions(
  identifier,
  'FETCH_PRODUCTS'
);
export const getDetailsActions = createAsyncActions(identifier, 'GET_DETAILS');
export const searchProductsActions = createAsyncActions(
  identifier,
  'SEARCH_PRODUCTS'
);
export const addNewProductActions = createAsyncActions(
  identifier,
  'ADD_NEW_PRODUCT'
);

// ACTION CREATORS
export const fetchProducts = () => ({ type: fetchProductsActions.request });

export const getDetails = id => ({
  type: getDetailsActions.request,
  payload: id
});

export const searchProducts = query => ({
  type: searchProductsActions.request,
  payload: query
});

export const addNewProduct = data => ({
  type: addNewProductActions.request,
  payload: data
});
