import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import * as pageActions from '../actions/pageActions';

class IndexSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.onGenreClick = this.onGenreClick.bind(this);
  }

  onGenreClick (e) {
    this.props.actions.fetchBooksByGenre(e.target.innerText);
  }

  render() {
    const genres = [
      'Angular',
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'NodeJS'
    ];
    return (
      <div>
        <h2>Genres</h2>
        <ul>
          {genres.map((category, index) => (
            <li key={index}>
              <Link to={`books/category/${category}`} onClick={this.onGenreClick}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pageActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(IndexSidebar);
