import React from 'react';
import { Link } from 'react-router';
import { Container, Header } from 'semantic-ui-react';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Container className='not-found' text textAlign='center'>
        <Header as='h2'>Not found</Header>
        <p>Sorry! The page you are looking for could not be found.</p>
        <p>Return to <Link to='/'>home page.</Link></p>
      </Container>
    );
  }
}

export default NotFoundPage;
