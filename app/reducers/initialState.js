export default {
  auth: {
    currentUser: {},
    isAuthenticated: false,
    isFetching: false,
    errorMessage: ''
  },
  books: {
    bookItems: {},
    result: [],
    totalCount: '',
    isFetching: false,
    errorMessage: ''
  },
  favorite: {
    bookItems: {},
    result: [],
    totalCount: '',
    isFetching: false
  },
  book: {
    bookDetails: {},
    isFetching: false,
    errorMessage: ''
  },
  sorting: {
    year: 'all',
    rating: 'all',
    genre: 'all',
    sorting: 'featured',
    searchText: ''
  }
};

/*
export default {
  auth: {
    currentUser: {},
    isAuthenticated: false,
    isFetching: false,
    errorMessage: ''
  },
  books: {
    bookItems: [],
    totalCount: '',
    isFetching: false,
    errorMessage: ''
  },
  favorite: {
    bookItems: [],
    totalCount: '',
    isFetching: false
  },
  book: {
    bookDetails: {},
    isFetching: false,
    errorMessage: ''
  },
  sorting: {
    year: 'all',
    rating: 'all',
    genre: 'all',
    sorting: 'featured',
    searchText: ''
  }
};
*/
