import {
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
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
        ...state,
        commentList: state.commentList.concat(action.comment)
      }
    case EDIT_COMMENT :
      return {
        ...state,
        commentList: state.commentList.map((comment) => {
          if (comment.id === action.comment.id) {
            return action.comment;
          }
          return comment;
        })
      }
    case REMOVE_COMMENT :
      return {
        ...state,
        commentList: state.commentList.filter(comment =>
          comment.id !== action.commentId
        )
      }
    default :
      return state
  }
}

export default comment;
