import * as ActionTypes from './actionTypes';
import axios from 'axios'

const CategoriesUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

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

 