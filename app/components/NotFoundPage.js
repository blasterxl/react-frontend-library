import React from 'react';
import { Link } from 'react-router';

class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <h2>Not found</h2>
        <p>Sorry! The page you are looking for could not be found.</p>
        <p>Return to <Link to='/'>home page.</Link></p>
      </div>
    );
  }
}

export default NotFoundPage;
