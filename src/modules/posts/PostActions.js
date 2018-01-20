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

export const postPost = (data) => dispatch => (
  ReadableAPIUtil
      .addPost(data)
      .then(post => dispatch(addPost(post)))
);

export const putPost = (postId, data) => dispatch => (
  ReadableAPIUtil
      .editPost(postId, data)
      .then(post => dispatch(editPost(post)))
);

export const deletePost = (postId) => dispatch => (
  ReadableAPIUtil
      .deletePost(postId)
      .then(postId => dispatch(removePost(postId)))
);


export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export function addPost (post) {
  return {
    type: ADD_POST,
    post
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

export function editPost (post) {
  return {
    type: EDIT_POST,
    post
  }
}

export function removePost ({ postId }) {
  return {
    type: REMOVE_POST,
    postId
  }
}
