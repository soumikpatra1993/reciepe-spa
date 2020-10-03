import {ADD_FAV} from '../actions/actionTypes';

const initial = {
    favs : []
}

const reducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_FAV:
        state.favs.unshift(action.payload)
      return  {...state}
    default:
       return state;
  }
};
export default reducer;