import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import * as contentActions from '../actions/contentActions';

import DimmerLoader from './DimmerLoader';

class BookDetailsPage extends React.Component {
  componentWillMount(){
   this.props.actions.loadBook(this.props.params.id);
  }

  render() {
    const { bookDetails, isFetching } = this.props.book;

    let template;
    if (isFetching) {
      template = (
        <DimmerLoader active={isFetching} />
      );
    } else {
      template = (
        <div className='book-info-container'>
          <div className='book-info'>
            <h2 className="book-title">{bookDetails.title}</h2>
            <div className='book-details'>
              <img src={bookDetails.posterUrl} alt=""/>
              <div className='book-details-info'>
                <p className="book-details-author">{bookDetails.author}</p>
                <p className="book-details-date">{`${bookDetails.month} ${bookDetails.year}`}</p>
                <p className="book-details-pages">{bookDetails.pages}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Link to='books/'>◀︎ Back to Books</Link>
        {template}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.book
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(contentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);
