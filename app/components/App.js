import React from 'react';
import { Container } from 'semantic-ui-react';

import * as authActions from '../actions/authActions';

import NavBar from './NavBar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <NavBar/>
        </Container>
        {this.props.children}
      </div>
    );
  }
}

export default App;
