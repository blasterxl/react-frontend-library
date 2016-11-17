import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function sortingReducer (state = initialState.sorting, action) {
  switch (action.type) {
    case types.SET_YEAR:
      return {
        ...state,
        year: action.year
    };
    case types.SET_RATING:
      return {
        ...state,
        rating: action.rating
    };
    case types.SET_GENRE:
      return {
        ...state,
        genre: action.genre
    };
    case types.SET_SORTING:
      return {
        ...state,
        sorting: action.sorting
    };
    case types.SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.searchText
    };
    default:
      return state;
  }
}
