import * as types from './actionTypes';

import firebase, { firebaseRef } from '../api/firebaseAPI';

export const addBooks = (info, books) => {
  return {
    type: types.ADD_BOOKS,
    info,
    books
  };
};

export const fetchBooksByGenre = (genre) => {
  return (dispatch) => {
    let booksRef = firebaseRef.child(`books/${genre}`);

    return booksRef.once('value').then((snapshot) => {
      let genreCatalog = snapshot.val() || {};
      let parsedBooks = [];
      Object.keys(genreCatalog.items).map((bookId) => {
        parsedBooks.push({
          id: bookId,
          ...genreCatalog.items[bookId]
        });
      });
      dispatch(addBooks(genreCatalog, parsedBooks));
    });
  };
};
