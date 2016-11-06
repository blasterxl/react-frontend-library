import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../actions/authActions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin () {
    this.props.actions.startLogin();
  }

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <p>Login with Google account bellow.</p>
        <button onClick={this.onLogin}>Login</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(LoginPage);
