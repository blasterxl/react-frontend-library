import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class BookDetailsPage extends React.Component {
  render() {
    const { category, item } = this.props.params;
    const i = this.props.books.findIndex(
      (book) => book.id === item
    );
    const book = this.props.books[i];

    return (
      <div>
        <Link to={`books/category/${category}`}>◀︎ Back</Link>
        <h1>{book.title}</h1>
        <img src={book.posterUrl} alt="Alt"/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.page.books
  };
}

export default connect(mapStateToProps)(BookDetailsPage);
