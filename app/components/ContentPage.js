import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class ContentPage extends React.Component {
  render() {
    const { bookItems, isFetching } = this.props.books;

    let template;
    if (isFetching) {
      template = (
        <div>Loading...</div>
      );
    } else {
      template = (
        <div className='book-list-container'>
          {bookItems.map((item, index) => (
            <div key={index} className='book-card'>
              <div key={index} className='book-card-content'>
                <img src={item.posterUrl} alt=""/>
                <div className='book-card-info'>
                  <h3 className="book-card-title"></h3>
                  <p className="book-card-author">{item.author}</p>
                  <p className="book-card-date">{`${item.month} ${item.year}`}</p>
                  <p className="book-card-pages">{item.pages}</p>
                </div>
              </div>
              <div className="book-card-actions">
                <Link to={`books/category/${item.category}/${item.id}`}>Details</Link>
              </div>
            </div>
          ))}
        </div>
      );
    }

  	return (
      <div>
        <h1>Main Books Page</h1>
        {template}
      </div>
  	);
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(ContentPage);
