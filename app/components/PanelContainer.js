import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IndexSidebar from './IndexSidebar';
import TopSortingPanel from './TopSortingPanel';
import { getFilters } from '../helpers/index';

import * as sortingActions from '../actions/sortingActions';

class PanelContainer extends React.Component {
  render () {
    const {
      setYearFilter,
      setRatingFilter,
      setGenreFilter,
      setSortingFilter } = this.props.actions
    return (
      <div>
        <div className="sidebar">
          <IndexSidebar
            isFetching={this.props.isFetching}
            selectedGenre={this.props.selectedGenre}
            genres={this.props.genres}
            onGenreChange={setGenreFilter} />
        </div>
        <TopSortingPanel
          isFetching={this.props.isFetching}
          selectedYear={this.props.selectedYear}
          selectedRating={this.props.selectedRating}
          years={this.props.years}
          ratings={this.props.ratings}
          sorting={this.props.sorting}
          onYearChange={setYearFilter}
          onRatingChange={setRatingFilter}
          onSortingChange={setSortingFilter} />
      </div>
    );
  }
}

function mapStateToProps (state) {
  const { year, rating, genre, sorting } = state.sorting;
  const { bookItems, isFetching } = state.books;
  return {
    selectedYear: year,
    selectedRating: rating,
    selectedGenre: genre,
    sorting,
    years: getFilters('year', bookItems).sort((a,b) => a - b),
    ratings: getFilters('rating', bookItems).sort((a,b) => a - b),
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
