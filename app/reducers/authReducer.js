import * as types from '../actions/actionTypes';

const initialState = {
  uid: '',
  name: '',
  photo: ''
};

export default function authReducer (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
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
