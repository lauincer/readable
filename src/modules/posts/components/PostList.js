import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { sortByScore, sortByDate } from './../../posts/PostActions'

class PostList extends Component {
  render() {
    const { list, sortByScore, sortByDate } = this.props;

    return (
        <div className='post-list'>
          <h2 className='subheader'>
            Post List
          </h2>
          <a>+ Add New Post</a>
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
