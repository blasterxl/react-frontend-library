import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function booksReducer (state = initialState.books, action) {
  switch (action.type) {
    case types.LOAD_BOOKS_REQUEST:
      return {
        ...state,
        isFetching: true
    };
    case types.LOAD_BOOKS_SUCCESS:
      return {
        ...state,
        bookItems: action.books,
        totalCount: action.totalCount,
        isFetching: false,
        errorMessage: ''
    };
    case types.LOAD_BOOKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
    };
    default:
      return state;
  }
}
