import * as ReadableAPIUtil from '../../utils/api';
import * as types from './PostActionTypes';

export const fetchPosts = () => dispatch => (
  ReadableAPIUtil
      .fetchPosts()
      .then(posts => dispatch(receivePosts(posts)))
);

export const addPost = (data) => dispatch => (
  ReadableAPIUtil
      .addPost(data)
      .then(post => dispatch(receivePost(post)))
);

export const editPost = (postId, data) => dispatch => (
  ReadableAPIUtil
      .editPost(postId, data)
      .then(post => dispatch(receiveEditedPost(post)))
);

export const votePost = (postId, data) => dispatch => (
  ReadableAPIUtil
      .votePost(postId, data)
      .then(post => dispatch(receiveEditedPost(post)))
);

export const deletePost = (postId) => dispatch => (
  ReadableAPIUtil
      .deletePost(postId)
      .then(post => dispatch(receiveDeletedPost(post)))
);


export const receivePosts = posts => ({
  type: types.RECEIVE_POSTS,
  posts
});

export const receivePost = post => ({
    type: types.ADD_POST,
    post
});

export const receiveEditedPost = post => ({
  type: types.EDIT_POST,
  post
});

export const receiveDeletedPost = post => ({
  type: types.REMOVE_POST,
  postId: post.id
});

export const sortByScore = () => ({
    type: types.SORT_BY_SCORE
});

export const sortByDate = () => ({
    type: types.SORT_BY_DATE
});
