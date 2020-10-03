import { CATEGORIES_SUCCESS   } from '../actions/actionTypes';
const initialState = {
    categories: [],
  };
const reducer = (state = {initialState}, action) => {
  switch (action.type) {
    case CATEGORIES_SUCCESS:
      return { ...state, ...action.payload };
    default:
       return state;
  }
};
export default reducer;