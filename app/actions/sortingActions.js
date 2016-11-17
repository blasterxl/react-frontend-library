import * as types from './actionTypes';

export const setYearFilter = (year) => {
  return {
    type: types.SET_YEAR,
    year
  };
};

export const setRatingFilter = (rating) => {
  return {
    type: types.SET_RATING,
    rating
  };
};

export const setGenreFilter = (genre) => {
  return {
    type: types.SET_GENRE,
    genre
  };
};

export const setSortingFilter = (sorting) => {
  return {
    type: types.SET_SORTING,
    sorting
  };
};

export const setSearchText = (searchText) => {
  return {
    type: types.SET_SEARCH_TEXT,
    searchText
  };
};