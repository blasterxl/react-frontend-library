import React from 'react';
import { connect } from 'react-redux';

import BooksContent from './BooksContent';
import { getVisibleBooks } from '../helpers/index';

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
  const { year, rating, genre, sorting } = state.sorting;
  const { bookItems, isFetching } = state.books;
  return {
    books: getVisibleBooks(year, rating, genre, sorting, bookItems),
    isFetching
  };
}

export default connect(mapStateToProps)(BooksContainer);
