import * as types from './types'
import axios from 'axios';

export const fetchRecipes = (page) => async (dispatch) => {
  await axios.get(`http://www.recipepuppy.com/api?p=${page}`)
    .then(response => {
      dispatch({
        type: types.FETCH_RECIPES,
        payload: response.data.results
      })
    })
    .catch(error => {
      console.log(error)
    })
}
