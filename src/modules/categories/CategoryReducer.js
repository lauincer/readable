import {
  RECEIVE_CATEGORIES
} from './CategoryActions'

function categoryReducer (state = {}, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        categoryList: action.data,
      }
    default :
      return state
  }
}

export default categoryReducer;
