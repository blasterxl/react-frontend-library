import React from 'react';
import { Card, Icon, Image, Rating, Button } from 'semantic-ui-react';
import { Link } from 'react-router';

const BookItem = ({item, index}) => (
  <Card color='green' fluid>
    <Card.Content>
      <Image
        label={{ as: 'a', corner: 'left', icon: 'remove bookmark' }}
        floated='left'
        size='small'
        src='http://placehold.it/150x200' />
      <Card.Header>
        {item.title}
      </Card.Header>
      <Card.Description className='card-author'>
        {item.author}
      </Card.Description>
      <Card.Description>
        {`${item.pages} pages`}
      </Card.Description>
      <Card.Meta>
        <span className='date'>
          {`${item.month} ${item.year}`}
        </span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Rating icon='star' rating={item.rating} maxRating={5} disabled />
      <Button
         as={Link}
         to={`books/${item.id}`}
         basic color='green'
         floated='right'>
         Details
         </Button>
    </Card.Content>
  </Card>
)

export default BookItem;
