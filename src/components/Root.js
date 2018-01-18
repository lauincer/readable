import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CategoryList from './../modules/categories/components/CategoryList'
import PostList from './../modules/posts/components/PostList'
import Post from './../modules/posts/components/Post'
import { fetchCategories } from './../modules/categories/CategoryActions'
import { fetchPosts } from './../modules/posts/PostActions'

class Root extends Component {

 constructor(props, context) {
     super(props, context);
     this.props.fetchCategories();
     this.props.fetchPosts();
 }

  render() {
    const { category, post } = this.props;

    return (
      <div>
        <Route exact path="/" render={() => (
          <div>
            <CategoryList list={category.categoryList} />
            <PostList list={post.postList} />
          </div>
        )}/>
        {category.categoryList && post.postList && category.categoryList.map((cat) => (
          <Route exact path={`/${cat.name}`}
                 key={cat.name}
                 render={() => (
                  <div>
                    <h1>Category: {cat.name}</h1>
                    <CategoryList list={category.categoryList} />
                    <PostList list={post.postList.filter(post => (post.category === cat.name))}
                              category={cat.name} />
                  </div>
          )}/>
        ))}
        {post.postList && post.postList
          .filter(post => (post.deleted === false))
          .map(post => (
            <Route exact path={`/${post.category}/${post.id}`}
                   key={`post-page-${post.id}`}
                   render={() => (
                    <Post post={post}/>
            )}/>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: (data) => dispatch(fetchCategories()),
    fetchPosts: (data) => dispatch(fetchPosts())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));
