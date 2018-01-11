import React, { Component } from 'react';
import CategoryList from './../modules/categories/components/CategoryList'
import PostList from './../modules/posts/components/PostList'

export function fetchCategories () {
  return fetch(
    'http://localhost:3001/categories',
    {headers: { 'Authorization': 'whatever-you-want' }}
  ).then((res) => res.json())
}

export function fetchPosts () {
  return fetch(
    'http://localhost:3001/posts',
    {headers: { 'Authorization': 'whatever-you-want' }}
  ).then((res) => res.json())
}

class Root extends Component {
  state = {
    categoryList: [],
    postList: []
  }

  componentDidMount() {
    fetchCategories()
    .then((res) => this.setState(() => ({
      categoryList: res.categories
    })))

    fetchPosts()
    .then((res) => this.setState(() => ({
      postList: res
    })))
  }

  render() {
    return (
      <div>
        <CategoryList list={this.state.categoryList} />
        <PostList list={this.state.postList} />
      </div>
    );
  }
}

export default Root;
