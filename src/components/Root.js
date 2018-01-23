import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CategoryList from './../modules/categories/components/CategoryList'
import PostList from './../modules/posts/components/PostList'
import Post from './../modules/posts/components/Post'
import PostCreate from './../modules/posts/components/PostCreate'
import { fetchCategories } from './../modules/categories/CategoryActions'
import { fetchPosts } from './../modules/posts/PostActions'

class Root extends Component {

 constructor(props, context) {
     super(props, context);
     this.props.fetchCategories();
     this.props.fetchPosts();
 }

  render() {
    const { category, posts } = this.props;

    if (posts.postList && posts.postList) {
      return (
        <div>
          <Switch>
            <Route exact path="/" render={() => (
              <div>
                <CategoryList list={category.categoryList} />
                <PostList list={posts.postList} />
              </div>
            )}/>
            {category.categoryList.map((cat) => (
              <Route exact path={`/${cat.name}`}
                     key={cat.name}
                     render={() => (
                      <div>
                        <CategoryList list={category.categoryList} />
                        <h2 className='category-title'>{cat.name}</h2>
                        <PostList list={posts.postList.filter(post => (post.category === cat.name))}
                                  categoryName={cat.name} />
                      </div>
              )}/>
            ))}
            {posts.postList
              .filter(post => (post.deleted === false))
              .map(post => (
                <Route exact path={`/${post.category}/${post.id}`}
                       key={`post-page-${post.id}`}
                       render={() => (
                        <Post post={post} />
                )}/>
            ))}
            <Route exact path='/create'
                   render={props => (
                    <PostCreate
                      categoryName={props.location.state.categoryName} />
            )}/>
            <Route exact path='/edit'
                   render={props => (
                    <PostCreate
                      post={props.location.state ? props.location.state.post : null} />
            )}/>
            <Route render={() => (
              <div className='content'>
                <h1 className='not-found'>404 - Not Found</h1>
              </div>
            )}/>
          </Switch>
        </div>
      );
    }

    return null;
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
