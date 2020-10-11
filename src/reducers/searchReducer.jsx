import {SEARCH_RESULT} from '../actions/actionTypes';

const initial = {
    mealList : []
}

const reducer = (state = initial, action) => {
  switch (action.type) {
    case SEARCH_RESULT:
        return {...state , mealList : action.payload}
    default:
       return state;
  }
};
export default reducer;