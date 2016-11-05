import React from 'react';
import { Link } from 'react-router';

class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
      	Page not found. Return to <Link to='/'>home page</Link> 
      </div>
    );
  }
}

export default NotFoundPage;