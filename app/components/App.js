import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import * as authActions from '../actions/authActions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout () {
    this.props.actions.signOutUser();
  }

  render() {
    let isAuthenticated = this.props.isAuth;
    let authLink;
    if (isAuthenticated) {
      authLink = (
        <button onClick={this.onLogout}>Logout</button>
      );
    } else {
      authLink = (
        <Link to='/login'>Login</Link>
      );
    }

    return (
      <div>
      	<ul>
          <li className="top-nav"><Link to='/'>Home</Link></li>
          <li className="top-nav"><Link to='/books'>Books</Link></li>
          <li className="top-nav"><Link to='/about'>About</Link></li>
          <li className="top-nav">{authLink}</li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuthenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
