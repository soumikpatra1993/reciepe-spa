import * as ActionTypes from './actionTypes';
import axios from 'axios'

const CategoriesUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const CategoryDetailUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const SearchUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

export function fetchCategories() {
    return dispatch => {
        axios.get (CategoriesUrl).then (response =>
          dispatch ({
            type: ActionTypes.CATEGORIES_SUCCESS,
            payload: response.data,
          })
        );
    };
   }
   export function fetchCateGoryDetail(category) {
    return dispatch => {
        axios.get (`${CategoryDetailUrl}${category}`).then (response =>
          dispatch ({
            type: ActionTypes.CATEGORY_DETAIL,
            payload: response.data.meals,
          })
        );
    };
   }
   export function fetchSearchResult (search) {
    return dispatch => {
      axios.get (`${SearchUrl}${search}`).then (response =>
        dispatch ({
          type: ActionTypes.SEARCH_RESULT,
          payload: response.data.meals,
        })
      );
  };
   }
   export function addToFav(category ) {
     return {type: ActionTypes.ADD_FAV, payload : {...category , color : 'secondary'} }
  }

  export function deleteSelectedCategory (category) {
    return {type : ActionTypes.DELETE_CATEGORY, payload : category}
  }
  export function selectedCategory (category) {
    return {type : ActionTypes.SELECTED_CATEGORY, payload : category}
  }
  export function selectedCategories () {
    
    return {type : ActionTypes.SELECTED_CATEGORIES}
  }
  
 