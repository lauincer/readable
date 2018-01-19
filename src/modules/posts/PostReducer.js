import {
  RECEIVE_POSTS,
  SORT_BY_SCORE,
  SORT_BY_DATE,
  ADD_POST,
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
    case REMOVE_POST :
      return {
        ...state
      }
    default :
      return state
  }
}

export default post;
