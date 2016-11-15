import React from 'react';
import { Link } from 'react-router';

import PanelContainer from './PanelContainer';
import BooksContainer from './BooksContainer';

class BooksPage extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div>
        <PanelContainer />
        <div className="content">
          {content || <BooksContainer />}
        </div>
      </div>
    );
  }
}

export default BooksPage;
