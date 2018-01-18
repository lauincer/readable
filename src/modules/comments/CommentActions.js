import * as ReadableAPIUtil from '../../utils/api';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const fetchComments = (postId) => dispatch => (
  ReadableAPIUtil
      .fetchComments(postId)
      .then(comments => dispatch(receiveComments(comments)))
);

export function addComment ({ postId }) {
  return {
    type: ADD_COMMENT
  }
}

export function removeComment ({ commentId }) {
  return {
    type: REMOVE_COMMENT
  }
}
