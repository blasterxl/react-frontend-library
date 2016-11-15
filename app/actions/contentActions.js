import * as types from './actionTypes';

import firebase, { firebaseRef } from '../api/firebaseAPI';

//loadBooks actionCreators
export const loadBooks = () => {
  return (dispatch) => {
    dispatch({type: types.LOAD_BOOKS_REQUEST});
    const booksRef = firebaseRef.child('books/');

    return booksRef.once('value')
      .then((snapshot) => {
        let books = snapshot.val() || {};
        let parsedBooks = [];
        Object.keys(books).map((bookId) => {
          parsedBooks.push({
            id: bookId,
            ...books[bookId]
          });
        });
        let totalCount = parsedBooks ? parsedBooks.length : 0;
        dispatch(loadBooksSuccess(parsedBooks, totalCount));
      })
      .catch((error) => {
        let errorMessage = error.message;
        console.error('Load books error', errorMessage);
        dispatch(loadBooksFailure(errorMessage));
      });
  };
};

export const loadBooksSuccess = (books, totalCount) => {
  return {
    type: types.LOAD_BOOKS_SUCCESS,
    books,
    totalCount
  };
};

export const loadBooksFailure = (errorMessage) => {
  return {
    type: types.LOAD_BOOKS_FAILURE,
    errorMessage
  };
};

//loadBook actionCreators
export const loadBook = (id) => {
  return (dispatch) => {
    dispatch({type: types.LOAD_BOOK_REQUEST});
    const booksRef = firebaseRef.child(`books/${id}`);

    return booksRef.once('value')
      .then((snapshot) => {
        let book = snapshot.val() || {};
        dispatch(loadBookSuccess(book));
      })
      .catch((error) => {
        let errorMessage = error.message;
        console.error('Load book error', errorMessage);
        dispatch(loadBookFailure(errorMessage));
      });
  };
};

export const loadBookSuccess = (book) => {
  return {
    type: types.LOAD_BOOK_SUCCESS,
    book
  };
};

export const loadBookFailure = (errorMessage) => {
  return {
    type: types.LOAD_BOOK_FAILURE,
    errorMessage
  };
};
