import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from '../actions/authActions';

const initialState = {
  isFetching: false,
  userData: [],
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return { ...state, isFetching: true };

    case SIGN_IN_SUCCESS:
      return { ...state, userData: action.payload, isFetching: false };

    case SIGN_IN_FAILURE:
      return { ...state, error: action.payload };

    case SIGN_UP_REQUEST:
      return { ...state, isFetching: true };

    case SIGN_UP_SUCCESS:
      return { ...state, details: action.payload, isFetching: false };

    case SIGN_UP_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
