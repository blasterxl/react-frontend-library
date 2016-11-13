import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer (state = initialState.auth, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true
    };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.user,
        isAuthenticated: true,
        isFetching: false,
        errorMessage: ''
    };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
    };
    case types.LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: true
    };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: {},
        isAuthenticated: false,
        isFetching: false
    };
    case types.LOGOUT_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
    };
    default:
      return state;
  }
};
