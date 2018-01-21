import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { sortByScore, sortByDate, votePost } from './../PostActions'

class PostList extends Component {
  votePost(postId, vote) {
    const { votePost } = this.props;
    votePost(postId, { option: vote });
  }

  render() {
    const { list, sortByScore, sortByDate, categoryName } = this.props;

    return (
        <div className='content'>
          <h1>
            {categoryName ? categoryName : ''} Posts
          </h1>
          <hr />
          <Link className='btn' to={{
            pathname: '/create',
            state: { 'categoryName': categoryName }
          }}>
            + Add New Post
          </Link>
          <div className="block">
            <h4>Sort by:</h4>
            <button className='btn btn--left' onClick={() => sortByScore()}>Score</button>
            <button className='btn' onClick={() => sortByDate()}>Date</button>
          </div>
          <ul className='post-list'>
            {list && list.map((post) => (
              <li key={`post-${post.id}`}>
                <Link to={{
                  pathname: `/${post.category}/${post.id}`
                }}>
                  <h2>{post.title}</h2>
                </Link>
                <p className='post-header'>
                  <span className='date'>{new Date(post.timestamp).toDateString()}</span>
                  <span className='author'>by {post.author}</span>
                  <span className='score'>score: {post.voteScore}</span>
                </p>
                <p className='category'>
                  Category: <span className='category-name'>{post.category}</span>
                </p>
                <p className='block'>
                  Vote:&nbsp;
                  <button className='btn btn--left btn--vote' onClick={() => this.votePost(post.id, 'upVote')}>:)</button>
                  <button className='btn btn--vote' onClick={() => this.votePost(post.id, 'downVote')}>:(</button>
                </p>
              </li>
            ))}
          </ul>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sortByScore: (data) => dispatch(sortByScore()),
    sortByDate: (data) => dispatch(sortByDate()),
    votePost: (postId, data) => dispatch(votePost(postId, data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
