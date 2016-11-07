import { combineReducers } from 'redux';

import auth from './authReducer';
import page from './pageReducer';


const rootReducer = combineReducers({
  auth,
  page
});

export default rootReducer;
