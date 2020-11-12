import { combineReducers } from 'redux'
import * as types from './types'

const recipesReducer = (state = {
  items: [],
  currentPage: 1
}, { type, payload }) => {
  switch(type) {
    case types.FETCH_RECIPES:
      state.items = payload;
      return state;
    default:
      return state;
  }
}

// COMBINED REDUCERS
const reducers = {
  recipes: recipesReducer
}

export default combineReducers(reducers)
