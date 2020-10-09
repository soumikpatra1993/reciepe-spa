import { CATEGORIES_SUCCESS , DELETE_CATEGORY, CATEGORY_DETAIL,
   SELECTED_CATEGORY, SELECTED_CATEGORIES } from '../actions/actionTypes';
const initialState = {
    categories: [],
    meals : []
  };
  let filteredArr = []
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_SUCCESS:
      Object.assign(state , action.payload)
      
      return {...state}

    case DELETE_CATEGORY :
      state.categories.splice(action.payload ,1)
      return {...state}

      case SELECTED_CATEGORY : 
      if (action.payload){
       filteredArr = state.categories.filter(item => item.idCategory !== action.payload.idCategory);
      filteredArr.push(action.payload)
      filteredArr.sort((a,b) => a.idCategory - b.idCategory)
      return {...state}
      }
      return {...state, categories : filteredArr}

    case SELECTED_CATEGORIES:
      
      return {...state, categories : filteredArr}
   case CATEGORY_DETAIL : 
   return {...state, meals : action.payload}
    default:
       return state;
  }
};
export default reducer;