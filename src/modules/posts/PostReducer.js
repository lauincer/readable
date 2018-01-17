import {
  RECEIVE_POSTS,
  ADD_POST,
  REMOVE_POST
} from './PostActions'

function postReducer (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS :
      return {
        ...state,
        postList: action.data,
      }
    case ADD_POST :
      return {
        ...state
      }
    case REMOVE_POST :
      return {
        ...state
      }
    default :
      return state
  }
}

export default postReducer;
