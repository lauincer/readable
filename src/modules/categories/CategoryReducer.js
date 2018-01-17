import {
  RECEIVE_CATEGORIES
} from './CategoryActions'

function category (state = {}, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        categoryList: action.categories.categories,
      }
    default :
      return state
  }
}

export default category;
