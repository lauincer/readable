import * as types from './CommentActionTypes';

function comment (state = {}, action) {
  switch (action.type) {
    case types.RECEIVE_COMMENTS :
      return {
        ...state,
        commentList: action.comments
      }
    case types.ADD_COMMENT :
      return {
        ...state,
        commentList: state.commentList.concat(action.comment)
      }
    case types.EDIT_COMMENT :
      return {
        ...state,
        commentList: state.commentList.map((comment) => {
          if (comment.id === action.comment.id) {
            return action.comment;
          }
          return comment;
        })
      }
    case types.REMOVE_COMMENT :
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
