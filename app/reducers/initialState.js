import Immutable from 'immutable';

export default {
  auth: {
    currentUser: {},
    isAuthenticated: false,
    isFetching: false,
    errorMessage: ''
  },
  books: Immutable.Map(
    {
      bookItems: Immutable.Map(),
      result: Immutable.List(),
      totalCount: '',
      isFetching: false,
      errorMessage: ''
    }
  ),
  favorite: Immutable.Map(
    {
      bookItems: Immutable.Map(),
      result: Immutable.List(),
      totalCount: '',
      isFetching: false
    }
  ),
  book: Immutable.Map(
    {
      bookDetails: Immutable.Map(),
      isFetching: false,
      errorMessage: ''
    }
  ),
  sorting: {
    year: 'all',
    rating: 'all',
    genre: 'all',
    sorting: 'featured',
    searchText: ''
  }
};
