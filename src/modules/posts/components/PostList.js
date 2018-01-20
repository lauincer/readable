import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { sortByScore, sortByDate } from './../PostActions'

class PostList extends Component {
  render() {
    const { list, sortByScore, sortByDate, categoryName } = this.props;

    return (
        <div className='post-list'>
          <h2 className='subheader'>
            Posts
          </h2>
          <Link to={{
            pathname: '/create',
            state: { 'categoryName': categoryName }
          }}>
            + Add New Post
          </Link>
          <div>
            <h4>Sort by:</h4>
            <button onClick={() => sortByScore()}>Score</button>
            <button onClick={() => sortByDate()}>Date</button>
          </div>
          <ul>
            {list && list.map((post) => (
              <li key={`post-${post.id}`}>
                <Link to={{
                  pathname: `/${post.category}/${post.id}`
                }}>
                  <h3>{post.title}</h3>
                </Link>
                <p>{post.author}</p>
                <p>{post.voteScore}</p>
                <p>{new Date(post.timestamp).toDateString()}</p>
                <p>{post.category}</p>
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
    sortByDate: (data) => dispatch(sortByDate())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
