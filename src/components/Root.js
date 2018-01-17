import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CategoryList from './../modules/categories/components/CategoryList'
import PostList from './../modules/posts/components/PostList'
import { fetchCategories } from './../modules/categories/CategoryActions'
import { fetchPosts, sortByScore, sortByDate } from './../modules/posts/PostActions'

class Root extends Component {

 constructor(props, context) {
     super(props, context);
     this.props.fetchCategories();
     this.props.fetchPosts();
 }

  render() {
    console.log('Props', this.props);
    const { category, post, sortByScore, sortByDate } = this.props;

    return (
      <div>
        <Route exact path="/" render={() => (
          <div>
            <CategoryList list={category.categoryList} />
            <div>
              <h4>Sort by:</h4>
              <button onClick={() => sortByScore()}>Score</button>
              <button onClick={() => sortByDate()}>Date</button>
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
    fetchPosts: (data) => dispatch(fetchPosts()),
    sortByScore: (data) => dispatch(sortByScore()),
    sortByDate: (data) => dispatch(sortByDate())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));
