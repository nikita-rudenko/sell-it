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

// ACTION CREATORS
export const fetchProfileData = () => ({
  type: fetchProfileDataActions.request
});

export const fetchOwnProducts = () => ({
  type: fetchOwnProductsActions.request
});
