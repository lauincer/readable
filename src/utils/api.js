const API_SERVER = 'http://localhost:3001/';
const API_HEADER = {headers: { 'Authorization': 'whatever-you-want' }};

export function fetchCategories() {
  return fetch(
    `${API_SERVER}categories`,
    API_HEADER
  ).then((res) => res.json())
}

export function fetchPosts() {
  return fetch(
    `${API_SERVER}posts`,
    API_HEADER
  ).then((res) => res.json())
}

export function fetchComments(postId) {
  return fetch(
    `${API_SERVER}posts/${postId}/comments`,
    API_HEADER
  ).then((res) => res.json())
}
