import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IndexSidebar from './IndexSidebar';
import { getFilters } from '../../helpers/index';

import * as sortingActions from '../../actions/sortingActions';

class PanelContainer extends React.Component {
  render () {
    const { setGenreFilter } = this.props.actions;
    return (
      <IndexSidebar
        isFetching={this.props.isFetching}
        selectedGenre={this.props.selectedGenre}
        genres={this.props.genres}
        onGenreChange={setGenreFilter}
      />
    );
  }
}

function mapStateToProps (state) {
  const { year, rating, genre, sorting } = state.sorting;
  const { bookItems, isFetching } = state.books;
  return {
    selectedGenre: genre,
    genres: getFilters('category', bookItems),
    isFetching
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(sortingActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelContainer);
