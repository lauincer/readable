const API_SERVER = 'http://localhost:3001/';
const API_AUTHORIZATION = { 'Authorization': 'whatever-you-want' };

export function fetchCategories() {
  return fetch(
    `${API_SERVER}categories`,
    {headers: API_AUTHORIZATION}
  ).then((res) => res.json())
}

export function fetchPosts() {
  return fetch(
    `${API_SERVER}posts`,
    {headers: API_AUTHORIZATION}
  ).then((res) => res.json())
}

export function fetchComments(postId) {
  return fetch(
    `${API_SERVER}posts/${postId}/comments`,
    {headers: API_AUTHORIZATION}
  ).then((res) => res.json())
}

export function addPost(data) {
  return fetch(`${API_SERVER}posts`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      ...API_AUTHORIZATION,
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}

export function editPost(postId, data) {
  return fetch(`${API_SERVER}posts/${postId}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      ...API_AUTHORIZATION,
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}

export function deletePost(postId) {
  return fetch(`${API_SERVER}posts/${postId}`, {
    method: 'DELETE',
    headers: API_AUTHORIZATION
  }).then(res => res.json())
}
