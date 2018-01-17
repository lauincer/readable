export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

export function getComments ({ postId }) {
  return {
    type: GET_COMMENTS,
    postId
  }
}

export function addComment ({ postId }) {
  return {
    type: ADD_COMMENT,
    recipe,
    day,
    meal,
  }
}

export function removeComment ({ commentId }) {
  return {
    type: REMOVE_COMMENT,
    day,
    meal,
  }
}
