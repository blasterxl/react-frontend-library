import React from 'react';
import { Link } from 'react-router';

import data from '../data';

class IndexSidebar extends React.Component {
  render() {
    return (
      <div>
        <h2>Genres</h2>
        <ul>
          {data.getAll().map((category, index) => (
            <li key={index}>
              <Link to={`books/category/${category.name}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default IndexSidebar;
