import {
  RECEIVE_POSTS,
  SORT_BY_SCORE,
  SORT_BY_DATE,
  ADD_POST,
  EDIT_POST,
  REMOVE_POST
} from './PostActions'

function post (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS :
      return {
        ...state,
        postList: action.posts
      }
    case SORT_BY_SCORE :
      return {
        ...state,
        postList: state.postList.sort((a,b) => (
          b.voteScore - a.voteScore
        ))
      }
    case SORT_BY_DATE :
      return {
        ...state,
        postList: state.postList.sort((a,b) => (
          b.timestamp - a.timestamp
        ))
      }
    case ADD_POST :
      return {
        ...state,
        postList: state.postList.concat(action.post)
      }
    case EDIT_POST :
      return {
        ...state,
        postList: state.postList.map((post) => {
          if (post.id === action.post.id) {
            return action.post;
          }
          return post;
        })
      }
    case REMOVE_POST :
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
