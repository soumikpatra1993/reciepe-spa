import { combineReducers } from 'redux';
import categoriesReducer from'./categoriesReducer';
import favouriteReducer from './favouriteReducer';
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
  categoriesReducer,
  favouriteReducer,
  searchReducer
});

export default rootReducer;
