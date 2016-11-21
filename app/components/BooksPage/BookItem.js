import React from 'react';
import { Card, Icon, Image, Rating, Button } from 'semantic-ui-react';
import { Link } from 'react-router';

class BookItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favorited: this.props.isFavorite };
  }

  favoriteBook () {
    this.setState({ favorited: true });
    this.props.onFavoriteSelect(this.props.item);
  }

  unfavoriteBook () {
    this.setState({ favorited: false });
    this.props.onFavoriteDeselect(this.props.item);
  }

  renderFavoriteIcon () {
    if (this.state.favorited) {
      return (
        <Image
          label={{ as: 'a', corner: 'left', icon: 'remove bookmark', color: 'green'}}
          floated='left'
          size='small'
          src='https://placehold.it/150x200'
          onClick={() => this.unfavoriteBook()} />
      );
    } else {
      return (
        <Image
          label={{ as: 'a', corner: 'left', icon: 'remove bookmark'}}
          floated='left'
          size='small'
          src='https://placehold.it/150x200'
          onClick={() => this.favoriteBook()} />
      );
    }
  }

  render () {
    const {item, index} = this.props;
    return (
      <Card color='green' fluid>
        <Card.Content>
          {this.renderFavoriteIcon()}
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
    );
  }
}

export default BookItem;
