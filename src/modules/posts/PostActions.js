import * as ReadableAPIUtil from '../../utils/api';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const SORT_BY_SCORE = 'SORT_BY_SCORE'
export const SORT_BY_DATE = 'SORT_BY_DATE'

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

export const deletePost = (postId) => dispatch => (
  ReadableAPIUtil
      .deletePost(postId)
      .then(post => dispatch(receiveDeletedPost(post)))
);


export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export function receivePost (post) {
  return {
    type: ADD_POST,
    post
  }
}

export function receiveEditedPost (post) {
  return {
    type: EDIT_POST,
    post
  }
}

export function receiveDeletedPost (post) {
  return {
    type: REMOVE_POST,
    postId: post.id
  }
}

export function sortByScore () {
  return {
    type: SORT_BY_SCORE
  }
}

export function sortByDate () {
  return {
    type: SORT_BY_DATE
  }
}
