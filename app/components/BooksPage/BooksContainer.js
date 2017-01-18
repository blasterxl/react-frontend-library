import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid } from 'semantic-ui-react';

import BooksContent from './BooksContent';
import TopSortingPanel from './TopSortingPanel';
import { getFilters, getVisibleBooks, getBooksBySearchText } from '../../helpers/index';

import * as sortingActions from '../../actions/sortingActions';
import * as contentActions from '../../actions/contentActions';

class BooksContainer extends React.Component {
  render () {
    const {
      setYearFilter,
      setRatingFilter,
      setSortingFilter } = this.props.sortingActions;
    const {
      favoriteBook,
      unfavoriteBook,
      loadFavoriteBooks } = this.props.contentActions;

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
              books={this.props.books}
              favoriteBook={favoriteBook}
              unfavoriteBook={unfavoriteBook}
              loadFavoriteBooks={loadFavoriteBooks} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps (state) {
  const { year, rating, genre, sorting, searchText } = state.sorting;
  const { bookItems, result, isFetching } = state.books;
  return {
    books: getVisibleBooks(year, rating, genre, searchText, sorting, bookItems, result),
    selectedYear: year,
    selectedRating: rating,
    selectedGenre: genre,
    sorting,
    years: getFilters('year', bookItems, result).sort((a,b) => a - b),
    ratings: getFilters('rating', bookItems, result).sort((a,b) => a - b),
    genres: getFilters('category', bookItems, result),
    isFetching
  };
}

function mapDispatchToProps (dispatch) {
  return {
    sortingActions: bindActionCreators(sortingActions, dispatch),
    contentActions: bindActionCreators(contentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);
