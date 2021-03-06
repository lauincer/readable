import * as ReadableAPIUtil from '../../utils/api';
import * as types from './CommentActionTypes';

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

export const voteComment = (commentId, data) => dispatch => (
  ReadableAPIUtil
      .voteComment(commentId, data)
      .then(post => dispatch(receiveEditedComment(post)))
);

export const receiveComments = comments => ({
  type: types.RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: types.ADD_COMMENT,
  comment
});

export const receiveEditedComment = comment => ({
    type: types.EDIT_COMMENT,
    comment
});

export const receiveDeletedComment = comment => ({
    type: types.REMOVE_COMMENT,
    commentId: comment.id
});
