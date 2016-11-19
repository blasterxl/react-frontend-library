import React from 'react';
import { Link } from 'react-router';
import { Header, Segment, Container, Button } from 'semantic-ui-react';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Segment className="main-header" raised>
          <Container textAlign='center'>
            <Header as='h1' inverted>React Frontend Library</Header>
            <Header as='h2' inverted>React + Redux + Firebase</Header>
            <Button
              as={Link}
              to='/login'
              icon='play'
              content='Get started' basic inverted color='green' size='big' />
            <Header
              className='github-link'
              as='a' size='small'
              href='https://github.com/blasterxl/react-frontend-library'
              target='_blank'
              inverted>
              View on Github
            </Header>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default HomePage;
