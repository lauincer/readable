import * as types from './PostActionTypes';

function post (state = {}, action) {
  switch (action.type) {
    case types.RECEIVE_POSTS :
      return {
        ...state,
        postList: action.posts
      }
    case types.SORT_BY_SCORE :
      return {
        ...state,
        postList: state.postList.sort((a,b) => (
          b.voteScore - a.voteScore
        ))
      }
    case types.SORT_BY_DATE :
      return {
        ...state,
        postList: state.postList.sort((a,b) => (
          b.timestamp - a.timestamp
        ))
      }
    case types.ADD_POST :
      return {
        ...state,
        postList: state.postList.concat(action.post)
      }
    case types.EDIT_POST :
      return {
        ...state,
        postList: state.postList.map((post) => {
          if (post.id === action.post.id) {
            return action.post;
          }
          return post;
        })
      }
    case types.REMOVE_POST :
      return {
        ...state,
        postList: state.postList.filter(post =>
          post.id !== action.postId
        )
      }
    default :
      return state
  }
}

export default post;
