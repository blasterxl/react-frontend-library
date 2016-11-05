import React from 'react';
import { Link } from 'react-router';

import data from '../data';

class BookDetailsPage extends React.Component {
  render() {
    const { category, item } = this.props.params;
    const bookItem = data.lookupItem(category, item);

    return (
      <div>
        <Link to={`books/category/${category}`}>◀︎ Back</Link>
        <h1>{bookItem.name}</h1>
        <img src={bookItem.posterUrl} alt="Alt"/>
      </div>
    );
  }
}

export default BookDetailsPage;
