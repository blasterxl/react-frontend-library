import React from 'react';
import { Link } from 'react-router';
import { Header, Segment, Container, Button } from 'semantic-ui-react';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Segment className="main-header" raised>
          <Container textAlign='center'>
            <Header as='h1' inverted>Imagine-a-Company</Header>
            <Header as='h2' inverted>Do whatever you want when you want to.</Header>
            <Button
              as={Link}
              to='/login'
              icon='play'
              content='Get started' basic inverted color='green' size='big' />
          </Container>
        </Segment>
      </div>
    );
  }
}

export default HomePage;
