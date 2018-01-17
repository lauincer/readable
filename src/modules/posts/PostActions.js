import * as ReadableAPIUtil from '../../utils/api';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = () => dispatch => (
  ReadableAPIUtil
      .fetchPosts()
      .then(posts => dispatch(receivePosts(posts)))
);

export function addPost ({ day, recipe, meal }) {
  return {
    type: ADD_POST,
    recipe,
    day,
    meal,
  }
}

export function removePost ({ day, meal }) {
  return {
    type: REMOVE_POST,
    day,
    meal,
  }
}
