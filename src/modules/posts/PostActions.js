import * as ReadableAPIUtil from '../../utils/api';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const SORT_BY_SCORE = 'SORT_BY_SCORE'
export const SORT_BY_DATE = 'SORT_BY_DATE'

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = () => dispatch => (
  ReadableAPIUtil
      .fetchPosts()
      .then(posts => dispatch(receivePosts(posts)))
);

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

export function addPost (post) {
  return {
    type: ADD_POST,
    post
  }
}

export const postPost = (data) => dispatch => (
  ReadableAPIUtil
      .addPost(data)
      .then(posts => dispatch(addPost(data)))
);

export function removePost ({ day, meal }) {
  return {
    type: REMOVE_POST,
    day,
    meal,
  }
}
