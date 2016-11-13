import { combineReducers } from 'redux';

import auth from './authReducer';
import { booksReducer } from './pageReducer';
import * as types from '../actions/actionTypes';

const appReducer = combineReducers({
  auth,
  books: booksReducer
});

const rootReducer = (state, action) => {
  if (action.type === types.LOGOUT_SUCCESS) {
    state = undefined;
  }

  return appReducer(state, action);
}

export default rootReducer;
