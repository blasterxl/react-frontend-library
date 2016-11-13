import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class ContentPage extends React.Component {
  render() {
    let template;

    if (this.props.loading) {
      template = (
        <div>Loading...</div>
      );
    } else {
      let books = this.props.books;
      template = (
        <ul>
          {books.map((item, index) => (
            <li key={index}>
              <Link to={`books/category/${item.category}/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      );
    }

  	return (
      <div>
        <h1>Main Books Page</h1>
        {template}
      </div>
  	);
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.bookItems,
    loading: state.books.isFetching
  };
}

export default connect(mapStateToProps)(ContentPage);
