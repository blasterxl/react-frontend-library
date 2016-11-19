import React from 'react';
import { Link } from 'react-router';
import { Container, Grid } from 'semantic-ui-react';

import PanelContainer from './PanelContainer';
import BooksContainer from './BooksContainer';

class BooksPage extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column className='sidebar-column' width={3}>
              <PanelContainer />
            </Grid.Column>
            <Grid.Column className='content-column' width={13}>
              {content || <BooksContainer />}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default BooksPage;
