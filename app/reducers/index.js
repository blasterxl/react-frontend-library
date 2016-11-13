import { combineReducers } from 'redux';

import auth from './authReducer';
import { booksReducer, bookReducer } from './pageReducer';
import * as types from '../actions/actionTypes';

const appReducer = combineReducers({
  auth,
  books: booksReducer,
  book: bookReducer
});

const rootReducer = (state, action) => {
  if (action.type === types.LOGOUT_SUCCESS) {
    state = undefined;
  }

  return appReducer(state, action);
}

export default rootReducer;
