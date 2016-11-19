import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid } from 'semantic-ui-react';

import BooksContent from './BooksContent';
import TopSortingPanel from './TopSortingPanel';
import { getFilters, getVisibleBooks, getBooksBySearchText } from '../helpers/index';

import * as sortingActions from '../actions/sortingActions';

class BooksContainer extends React.Component {
  render () {
    const {
      setYearFilter,
      setRatingFilter,
      setSortingFilter } = this.props.actions;

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
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
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <BooksContent
              isFetching={this.props.isFetching}
              books={this.props.books} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps (state) {
  const { year, rating, genre, sorting, searchText } = state.sorting;
  const { bookItems, isFetching } = state.books;
  return {
    books: getVisibleBooks(year, rating, genre, searchText, sorting, bookItems),
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

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);
