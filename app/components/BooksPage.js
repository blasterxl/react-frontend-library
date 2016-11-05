import React from 'react';
import { Link } from 'react-router';

import IndexSidebar from './IndexSidebar';
import ContentPage from './ContentPage';

class BooksPage extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div>
        <div className="sidebar">
          <IndexSidebar />
        </div>
        <div className="content">
          {content || <ContentPage />}
        </div>
      </div>
    );
  }
}

export default BooksPage;
