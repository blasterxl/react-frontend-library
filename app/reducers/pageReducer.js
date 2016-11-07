import * as types from '../actions/actionTypes';

const initialState = {
  category: '',
  description: '',
  books: []
};

export default function pageReducer (state = initialState, action) {
  switch (action.type) {
    case types.ADD_BOOKS:
      return {
        ...state,
        category: action.info.category,
        description: action.info.description,
        books: action.books
      };
    case types.LOGOUT:
      return {};
    default:
      return state;
  }
};
