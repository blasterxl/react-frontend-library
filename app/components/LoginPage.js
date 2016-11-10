import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../actions/authActions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.renderAuthError = this.renderAuthError.bind(this);
  }

  onLogin () {
    this.props.actions.signInUser();
  }

  renderAuthError() {
    if (this.props.authError) {
      return <div>{this.props.authError}</div>;
    }
    return <div></div>;
  }

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        {this.renderAuthError()}
        <p>Login with Google account bellow.</p>
        <button onClick={this.onLogin}>Login</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authError: state.auth.errorMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
