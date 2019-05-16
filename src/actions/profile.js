import createAsyncActions from './createAsyncActions';

const identifier = '@@prof/';

// ACTIONS
export const fetchProfileDataActions = createAsyncActions(
  identifier,
  'FETCH_PROFILE_DATA'
);

export const fetchOwnProductsActions = createAsyncActions(
  identifier,
  'FETCH_OWN_PRODUCTS'
);

export const deleteOwnProductActions = createAsyncActions(
  identifier,
  'DELETE_OWN_PRODUCT'
);

// ACTION CREATORS
export const fetchProfileData = () => ({
  type: fetchProfileDataActions.request
});

export const fetchOwnProducts = () => ({
  type: fetchOwnProductsActions.request
});

export const deleteOwnProduct = id => ({
  type: deleteOwnProductActions.request,
  payload: id
});
