import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
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
    console.log('Props', this.props);
    return (
      <div>
        <Route exact path="/" render={() => (
          <div>
            <CategoryList list={this.state.categoryList} />
            <PostList list={this.state.postList} />
          </div>
        )}/>
        {this.state.categoryList.map((category) => (
          <Route exact path={`/${category.name}`} render={() => (
            <div>
              <h1>{category.name}</h1>
              <CategoryList list={this.state.categoryList} />
              <PostList list={[]} category='' />
            </div>
          )}/>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    test: state
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchCategories: (data) => dispatch(fetchCategories()),
    fetchPosts: (data) => dispatch(fetchPosts())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));
