import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
      	<ul>
          <li className="top-nav"><Link to='/'>Home</Link></li>
          <li className="top-nav"><Link to='/books'>Books</Link></li>
          <li className="top-nav"><Link to='/about'>About</Link></li>
          <li className="top-nav"><Link to='/login'>Login</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
