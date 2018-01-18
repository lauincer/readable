import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CommentList from './../../comments/components/CommentList'

class Post extends Component {
  formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toDateString();
  }

  render() {
    const { post } = this.props;

    return (
      <div className='post'>
        <h2 className='subheader'>
          {post.title}
        </h2>
        <p>{this.formatDate(post.timestamp)}</p>
        <p>Author: {post.author}</p>
        <p>Vote Score: {post.voteScore}</p>
        <p>{post.category}</p>
        <p>{post.body}</p>
        <CommentList postId={post.id} />
      </div>
    )
  }
}

export default Post;
