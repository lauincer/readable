import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CategoryList from './../modules/categories/components/CategoryList'
import PostList from './../modules/posts/components/PostList'
import { fetchCategories } from './../modules/categories/CategoryActions'
import { fetchPosts } from './../modules/posts/PostActions'

class Root extends Component {

 constructor(props, context) {
     super(props, context);
     this.props.fetchCategories();
     this.props.fetchPosts();
 }

 orderBy(type) {
   console.log('orderBy');
 }

  render() {
    console.log('Props', this.props);
    const { category, post } = this.props;

    return (
      <div>
        <Route exact path="/" render={() => (
          <div>
            <CategoryList list={category.categoryList} />
            <div>
              <h4>Filter by:</h4>
              <button onClick={this.orderBy('score')}>Score</button>
              <button onClick={this.orderBy('date')}>Date</button>
            </div>
            <PostList list={post.postList} />
          </div>
        )}/>
        {category.categoryList && category.categoryList.map((cat) => (
          <Route exact path={`/${cat.name}`}
                 key={cat.name}
                 render={() => (
                  <div>
                    <h1>Category: {cat.name}</h1>
                    <CategoryList list={category.categoryList} />
                    <PostList list={post.postList} category={cat.name} />
                  </div>
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
