import {
  signInActions,
  signUpActions,
  signOutActions,
  authUserActions,
  resetErrorActions
} from '../actions/auth';

const initialState = {
  isFetching: false,
  userData: null,
  isAuthenticated: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case signInActions.request:
      return { ...state, error: null, isFetching: true };

    case signInActions.success:
      return {
        ...state,
        userData: action.payload,
        isAuthenticated: true,
        isFetching: false,
        error: null
      };

    case signInActions.failure:
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
        isFetching: false
      };

    case signUpActions.request:
      return { ...state, error: null, isFetching: true };

    case signUpActions.success:
      return {
        ...state,
        userData: action.payload,
        isAuthenticated: true,
        isFetching: false,
        error: null
      };

    case signUpActions.failure:
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
        isFetching: false
      };

    case signOutActions.request:
      return {
        ...state,
        error: null,
        isFetching: true
      };

    case signOutActions.success:
      return {
        ...state,
        isFetching: false,
        userData: null,
        isAuthenticated: false
      };

    case signOutActions.failure:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    case authUserActions.request:
      return {
        ...state,
        isFetching: true
      };

    case authUserActions.success:
      return {
        ...state,
        isFetching: false,
        userData: action.payload,
        isAuthenticated: true
      };

    case authUserActions.failure:
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
        isFetching: false
      };

    case resetErrorActions.request:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
}
