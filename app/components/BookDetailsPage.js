import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { Container, Grid, Image, Item, Accordion, Icon, Rating, Button } from 'semantic-ui-react';

import * as contentActions from '../actions/contentActions';

import DimmerLoader from './DimmerLoader';

class BookDetailsPage extends React.Component {
  componentWillMount () {
   this.props.actions.loadBook(this.props.params.id);
  }

  render() {
    const { bookDetails, isFetching } = this.props.book;

    let template;
    if (isFetching) {
      template = (
        <DimmerLoader active={isFetching} />
      );
    } else {
      template = (
        <Grid>
          <Grid.Row>
            <Grid.Column className='details-column' width={16}>
              <Button
                as={Link}
                to='books/'
                content='Back to Books'
                icon='left arrow'
                labelPosition='left'
                basic color='grey' />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Item>
                <Item.Image
                  className='details-image'
                  size='medium' floated='left'
                  src='http://placehold.it/250x330' />
                <Item.Content className='details-content' verticalAlign='top'>
                  <Item.Header as='h1'>{bookDetails.title}</Item.Header>
                  <Item.Meta>
                    <p>{bookDetails.author}</p>
                    <p>{`${bookDetails.pages} pages`}</p>
                    <p>{`${bookDetails.month} ${bookDetails.year}`}</p>
                    <Rating icon='star' rating={bookDetails.rating} maxRating={5} disabled />
                  </Item.Meta>
                  <Item.Extra>{bookDetails.added}</Item.Extra>
                  <Item.Description>
                    <Accordion fluid>
                      <Accordion.Title>
                        <Icon name='dropdown' />
                        How more...
                      </Accordion.Title>
                      <Accordion.Content>
                        <p>
                          {bookDetails.about}
                        </p>
                      </Accordion.Content>
                    </Accordion>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }

    return (
      <Container>
        {template}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.book
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(contentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);
