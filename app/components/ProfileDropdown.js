import React from 'react';
import { Link } from 'react-router';
import { Dropdown, Image } from 'semantic-ui-react';

const ProfileDropdown = ({user, onSignOut}) => {
  const trigger = (
    <span>
      <Image avatar src={user.photo} />
      {user.name}
    </span>
  );

  return (
    <Dropdown trigger={trigger} pointing='top left' icon={null}>
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to='/profile' text='Account' icon='user' />
        <Dropdown.Item as={Link} to='/favourite' text='Favourite' icon='folder open' />
        <Dropdown.Item
          onClick={() => onSignOut()}
          text='Sign Out' icon='sign out' />
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
