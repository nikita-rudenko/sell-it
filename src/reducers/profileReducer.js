import {
  FETCH_PROFILE_DATA_REQUEST,
  FETCH_PROFILE_DATA_SUCCESS,
  FETCH_PROFILE_DATA_FAILURE
} from '../actions/profileActions';

const initialState = {
  isFetching: false,
  profileData: null,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROFILE_DATA_REQUEST:
      return { ...state, isFetching: true };

    case FETCH_PROFILE_DATA_SUCCESS:
      return { ...state, profileData: action.payload, isFetching: false };

    case FETCH_PROFILE_DATA_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
