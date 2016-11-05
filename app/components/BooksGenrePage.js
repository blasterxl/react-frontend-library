import React from 'react';
import { Link } from 'react-router';

import data from '../data';

class BooksGenrePage extends React.Component {
  render() {
    const category = data.lookupCategory(this.props.params.category);
    let template = (
      <div>
        <Link to="/books">◀︎ Back</Link>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
        <ul>
          {category.items.map((item, index) => (
            <li key={index}>
              <Link to={`books/category/${category.name}/${item.name}`}>{item.name}</Link>
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

export default BooksGenrePage;
