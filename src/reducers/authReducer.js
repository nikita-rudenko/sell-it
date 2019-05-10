import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  RESET_AUTH_ERROR
  // signInActions
} from '../actions/authActions';

const initialState = {
  isFetching: false,
  userData: null,
  isAuthenticated: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    // case signInActions.request:
    case SIGN_IN_REQUEST:
      return { ...state, isFetching: true };

    case SIGN_IN_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        isAuthenticated: true,
        isFetching: false,
        error: null
      };

    case SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
        isFetching: false
      };

    case SIGN_UP_REQUEST:
      return { ...state, isFetching: true };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        isAuthenticated: true,
        isFetching: false,
        error: null
      };

    case SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
        isFetching: false
      };

    case RESET_AUTH_ERROR:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
}
