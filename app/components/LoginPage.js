import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Grid, Segment, Button, Header, Icon, Message } from 'semantic-ui-react';

import * as authActions from '../actions/authActions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.renderAuthError = this.renderAuthError.bind(this);
    this.renderAuthSuccess = this.renderAuthSuccess.bind(this);
  }

  onLogin () {
    this.props.actions.signInUser();
  }

  renderAuthError() {
    if (this.props.authError) {
      return (
        <Message negative>
          <Message.Header>We're sorry, but something went wrong.</Message.Header>
          <p>{this.props.authError}</p>
        </Message>
      );
    }
    return <div></div>;
  }

  renderAuthSuccess() {
    if (this.props.authSuccess) {
      return (
        <Message positive>
          <Message.Header>You already signed in on this website.</Message.Header>
        </Message>
      );
    }
    return <div></div>;
  }

  render() {
    return (
      <Container>
        <Grid centered columns={2}>
          <Grid.Column>
            <Segment className='signin-segment' color='green'>
              <Header className='signin-header' as='h2' icon>
                <Icon name='add user' color='grey' />
                Login Into Your Account
                <Header.Subheader>
                  You must be signed in to see content.
                </Header.Subheader>
              </Header>
              {this.renderAuthError()}
              {this.renderAuthSuccess()}
              <Button onClick={this.onLogin} disabled={this.props.authSuccess} color='google plus'>
                <Icon name='google plus' /> Google Plus
              </Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    authError: state.auth.errorMessage,
    authSuccess: state.auth.isAuthenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
