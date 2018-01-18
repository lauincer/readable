import {
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  REMOVE_COMMENT
} from './CommentActions'

function comment (state = {}, action) {
  switch (action.type) {
    case RECEIVE_COMMENTS :
      return {
        ...state,
        commentList: action.comments
      }
    case ADD_COMMENT :
      return {
        ...state
      }
    case REMOVE_COMMENT :
      return {
        ...state
      }
    default :
      return state
  }
}

export default comment;
