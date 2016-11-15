import React from 'react';
import { Link } from 'react-router';

const BooksContent = ({ books, isFetching }) => {
  let template;
  if (isFetching) {
    template = (
      <div>Loading...</div>
    );
  } else {
    template = (
      <div className='book-list-container'>
      {books.map((item, index) => (
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
            <Link to={`books/${item.id}`}>Details</Link>
          </div>
        </div>
      ))}
      </div>
    );
  }

  return (
    <div>
      {template}
    </div>
  );
};

export default BooksContent;
