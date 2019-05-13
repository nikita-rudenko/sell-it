import { fetchProfileDataActions } from '../actions/profile';

const initialState = {
  isFetching: false,
  profileData: null,
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
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
