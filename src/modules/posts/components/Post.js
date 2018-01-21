import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { deletePost } from './../PostActions';
import CommentList from './../../comments/components/CommentList'

class Post extends Component {
  state = {
    redirect: false
  }

  formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toDateString();
  }

  removePost() {
    const { post, deletePost } = this.props;
    deletePost(post.id);
    this.setState({ redirect: true });
  }

  render() {
    const { post } = this.props;
    const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/'/>;
     }

    return (
      <div className='post'>
        <h2 className='subheader'>
          {post.title}
        </h2>
        <button onClick={() => this.removePost()}>Delete</button>
        <Link to={{
          pathname: '/edit',
          state: { 'post': post }
        }}>Edit</Link>
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

function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deletePost: (data) => dispatch(deletePost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
