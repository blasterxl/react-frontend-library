import moment from 'moment';
import { denormalize, schema } from 'normalizr';

export const getFilters = (key, obj, index) => {

  const booksSchema = new schema.Entity('books');
  const mySchema = { books: [ booksSchema ] }
  const entities = { books: obj };
  const denormalized = denormalize({ books: index }, mySchema, entities);

  return denormalized.books.reduce((acc, item) => {
    if (!acc.includes(item[key])) {
      return [...acc, item[key]];
    }
    return acc;
  }, []);
}

export const getVisibleBooks = (year, rating, genre, searchText, sorting, books, index) => {

  const booksSchema = new schema.Entity('books');
  const mySchema = { books: [ booksSchema ] }
  const entities = { books: books };
  const denormalized = denormalize({ books: index }, mySchema, entities);

  return denormalized.books
    .filter(book => {
      let authorText = book.author.toLowerCase().split(' ');
      let titleText = book.title.toLowerCase().split(' ');
      let obj = authorText.concat(titleText);
      return (
        (year == 'all' || year == book.year) &&
        (rating == 'all' || rating == book.rating) &&
        (genre == 'all' || genre == book.category) &&
        (searchText == '' || obj.toString().indexOf(searchText.toLowerCase()) > -1)
      );
    })
    .sort((a, b) => {
      if (sorting == 'year') {
        return b.year - a.year;
      }
      if (sorting == 'alphabetically') {
        return a.title > b.title ? 1 : a.title < b.title ? -1 : 0;
      }
      if (sorting == 'featured') {
        return moment(b.added).valueOf() - moment(a.added).valueOf();
      }
    });
}
