import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
  // signInActions
} from '../actions/authActions';

const initialState = {
  isFetching: false,
  userData: [],
  isAuthenticated: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    // case signInActions.request:
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

    case AUTH_SUCCESS:
      return { ...state, isAuthenticated: true, isFetching: false };

    default:
      return state;
  }
}
