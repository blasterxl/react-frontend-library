import moment from 'moment';

export const getFilters = (key, arr) => {
  return arr.reduce((acc, item) => {
    if (!acc.includes(item[key])) {
      return [...acc, item[key]];
    }
    return acc;
  }, []);
}

export const getVisibleBooks = (year, rating, genre, searchText, sorting, books) => {
  return books
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
