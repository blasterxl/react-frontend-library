import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, IndexLink } from 'react-router';
import { Input, Menu, Button } from 'semantic-ui-react';

import SearchTextBar from './SearchTextBar';
import ProfileDropdown from './ProfileDropdown';

import * as authActions from '../../actions/authActions';
import * as sortingActions from '../../actions/sortingActions';

class NavBar extends React.Component {
  render() {
    const { currentUser, isAuthenticated } = this.props.auth;
    const { signOutUser } = this.props.authActions;
    const { searchText } = this.props;
  	const { setSearchText } = this.props.sortingActions;

    let authLink;
    if (isAuthenticated) {
      authLink = (
        <Menu.Menu position='right'>
          <Menu.Item>
            <SearchTextBar
              searchText={searchText}
              onSearchTextChange={setSearchText}  />
          </Menu.Item>
          <Menu.Item>
            <ProfileDropdown user={currentUser} onSignOut={signOutUser} />
          </Menu.Item>
        </Menu.Menu>
      );
    } else {
      authLink = (
        <Menu.Item className="signin" as={Link} to='/login' position='right'>
          <Button basic color='green' content='Sign In' />
        </Menu.Item>
      );
    }

    return (
      <Menu secondary size='large'>
        <Menu.Item>
          <img src='https://upload.wikimedia.org/wikipedia/commons/5/57/React.js_logo.svg' />
        </Menu.Item>
        <Menu.Item as={IndexLink} to='/' activeClassName='active' name='Home' />
        <Menu.Item as={Link} to='/books' activeClassName='active' name='Books' />
        <Menu.Item as={Link} to='/about' activeClassName='active' name='About' />
        {authLink}
      </Menu>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    searchText: state.sorting.searchText
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch),
    sortingActions: bindActionCreators(sortingActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
