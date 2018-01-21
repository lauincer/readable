import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { deletePost, votePost } from './../PostActions';
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

  votePost(vote) {
    const { post, votePost } = this.props;
    votePost(post.id, { option: vote });
  }

  render() {
    const { post } = this.props;
    const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/'/>;
     }

    return (
      <div className='content'>
        <h1>
          {post.title}
        </h1>
        <hr/>
        <button className='btn btn--left' onClick={() => this.removePost()}>Delete</button>
        <Link className='btn btn--small' to={{
          pathname: '/edit',
          state: { 'post': post }
        }}>Edit</Link>
        <p className='block'>
          Vote:&nbsp;
          <button className='btn btn--left btn--vote' onClick={() => this.votePost('upVote')}>:)</button>
          <button className='btn btn--vote' onClick={() => this.votePost('downVote')}>:(</button>
        </p>
        <p>{this.formatDate(post.timestamp)}</p>
        <p className='author'>by {post.author}</p>
        <p className='score'>score: {post.voteScore}</p>
        <p className='category'>
          Category: <span className='category-name'>{post.category}</span>
        </p>
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
    deletePost: (data) => dispatch(deletePost(data)),
    votePost: (postId, data) => dispatch(votePost(postId, data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
