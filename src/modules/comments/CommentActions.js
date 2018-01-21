import * as ReadableAPIUtil from '../../utils/api';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

export const fetchComments = (postId) => dispatch => (
  ReadableAPIUtil
      .fetchComments(postId)
      .then(comments => dispatch(receiveComments(comments)))
);

export const addComment = (data) => dispatch => (
  ReadableAPIUtil
      .addComment(data)
      .then(comment => dispatch(receiveComment(comment)))
);

export const editComment = (commentId, data) => dispatch => (
  ReadableAPIUtil
      .editComment(commentId, data)
      .then(comment => dispatch(receiveEditedComment(comment)))
);

export const deleteComment = (commentId) => dispatch => (
  ReadableAPIUtil
      .deleteComment(commentId)
      .then(comment => dispatch(receiveDeletedComment(comment)))
);

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export function receiveComment (comment) {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export function receiveEditedComment (comment) {
  return {
    type: EDIT_COMMENT,
    comment
  }
}

export function receiveDeletedComment (comment) {
  return {
    type: REMOVE_COMMENT,
    commentId: comment.id
  }
}
