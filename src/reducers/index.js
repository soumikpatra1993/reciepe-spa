import { combineReducers } from 'redux';
import categoriesReducer from'./categoriesReducer';
import favouriteReducer from './favouriteReducer'

const rootReducer = combineReducers({
  categoriesReducer,
  favouriteReducer
});

export default rootReducer;
