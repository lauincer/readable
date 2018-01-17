import {
  RECEIVE_POSTS,
  ADD_POST,
  REMOVE_POST
} from './PostActions'

function post (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS :
      return {
        ...state,
        postList: action.posts,
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

export default post;
