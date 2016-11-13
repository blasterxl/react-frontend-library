import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class BooksGenrePage extends React.Component {
  render() {
    if (!this.props.books) {
      return (
        <h1>Loading...</h1>
      );
    }

    let template = (
      <div>
        <Link to="/books">◀︎ Back to Books</Link>
        <div>123</div>
      </div>
    );

    return (
      <div>
        {this.props.children || template}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BooksGenrePage);
