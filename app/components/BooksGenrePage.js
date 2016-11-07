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
        <Link to="/books">◀︎ Back</Link>
        <h1>{this.props.category}</h1>
        <p>{this.props.description}</p>
        <ul>
          {this.props.books.map((item, index) => (
            <li key={index}>
              <Link to={`books/category/${this.props.category}/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
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
    category: state.page.category,
    description: state.page.description,
    books: state.page.books
  };
}

export default connect(mapStateToProps)(BooksGenrePage);
