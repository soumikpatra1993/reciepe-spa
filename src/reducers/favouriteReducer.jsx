import {ADD_FAV} from '../actions/actionTypes';

const initial = {
    favs : []
}

const reducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_FAV:
        if (!state.favs.find(item => item.idCategory === action.payload.idCategory))
        state.favs.unshift(action.payload)
      return  {...state}
    default:
       return state;
  }
};
export default reducer;