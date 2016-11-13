import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { getFilters } from '../helpers/index';

import * as pageActions from '../actions/pageActions';

class IndexSidebar extends React.Component {
  render () {

/*    function getFilters(key, arr) {
      return arr.reduce((acc, item) => {
        if (!acc.includes(item[key])) {
          return [...acc, item[key]];
        }
        return acc;
      }, []);
    }
*/
    let template;

    if (this.props.loading) {
      template = (
        <div>Loading...</div>
      );
    } else {
      let books = this.props.books;
      let genresList = getFilters('category', books);
      template = (
        <ul>
          {genresList.map((category, index) => (
            <li key={index}>
              <Link to={`books/category/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div>
        <h2>Genres</h2>
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pageActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexSidebar);
