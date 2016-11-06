import * as types from '../actions/actionTypes';

export default function authReducer (state = {}, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        uid: action.user.uid,
        name: action.user.displayName,
        photo: action.user.photoURL
      };
    case types.LOGOUT:
      return {};
    default:
      return state;
  }
};
