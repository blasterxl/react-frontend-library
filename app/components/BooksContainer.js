import React from 'react';
import { connect } from 'react-redux';

import BooksContent from './BooksContent';
import { getVisibleBooks, getBooksBySearchText } from '../helpers/index';

class BooksContainer extends React.Component {
  render () {
    return (
      <div>
        <BooksContent
          isFetching={this.props.isFetching}
          books={this.props.books} />
      </div>
    );
  }
}

function mapStateToProps (state) {
  const { year, rating, genre, sorting, searchText } = state.sorting;
  const { bookItems, isFetching } = state.books;
  return {
    books: getVisibleBooks(year, rating, genre, searchText, sorting, bookItems),
    isFetching
  };
}

export default connect(mapStateToProps)(BooksContainer);
