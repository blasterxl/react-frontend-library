import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { Container, Grid, Card } from 'semantic-ui-react';

import * as contentActions from '../actions/contentActions';

import DimmerLoader from './DimmerLoader';
import BookItem from './BooksPage/BookItem';

class FavouritePage extends React.Component {
  componentWillMount () {
    this.props.actions.loadFavoriteBooks();
  }

  render() {
    const { bookItems, isFetching } = this.props.favorite;
    const {
      favoriteBook,
      unfavoriteBook } = this.props.actions;
    let template;

    if (isFetching) {
      template = (
        <DimmerLoader active={isFetching} />
      );
    } else {
      template = (
        <Card.Group itemsPerRow={3}>
          {bookItems.map((item, index) => (
            <BookItem
              key={index}
              item={item}
              isFavorite={true}
              onFavoriteSelect={favoriteBook}
              onFavoriteDeselect={unfavoriteBook} />
          ))}
        </Card.Group>
      );
    }

    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column className='favorite-column'>
              {template}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    favorite: state.favorite
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(contentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouritePage);
