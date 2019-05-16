import {
  fetchProfileDataActions,
  fetchOwnProductsActions
} from '../actions/profile';

const initialState = {
  isFetching: false,
  profileData: null,
  ownProducts: null,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case fetchProfileDataActions.request:
      return { ...state, isFetching: true };

    case fetchProfileDataActions.success:
      return {
        ...state,
        profileData: action.payload,
        isFetching: false
      };

    case fetchProfileDataActions.failure:
      return { ...state, isFetching: false, error: action.payload };

    case fetchOwnProductsActions.request:
      return { ...state, isFetching: true };

    case fetchOwnProductsActions.success:
      return { ...state, isFetching: false, ownProducts: action.payload };

    case fetchOwnProductsActions.failure:
      return { ...state, isFetching: false, error: action.payload };

    default:
      return state;
  }
}
