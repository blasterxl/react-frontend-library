import React from 'react';
import { Link } from 'react-router';
import { Card } from 'semantic-ui-react';

import BookItem from './BookItem';
import DimmerLoader from '../DimmerLoader';

const BooksContent = ({isFetching, books, favoriteBook, unfavoriteBook}) => {
  let template;
  if (isFetching) {
    template = (
      <DimmerLoader active={isFetching} />
    );
  } else {
    template = (
      <Card.Group itemsPerRow={2}>
        {books.map((item, index) => (
          <BookItem
            key={index}
            item={item}
            isFavorite={false}
            onFavoriteSelect={favoriteBook}
            onFavoriteDeselect={unfavoriteBook} />
        ))}
      </Card.Group>
    );
  }

  return (
    <div>
      {template}
    </div>
  );
};

export default BooksContent;
