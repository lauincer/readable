import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from './../CommentActions'

class CommentList extends Component {
  constructor(props, context) {
      super(props, context);
      this.props.fetchComments(this.props.postId);
  }

  render() {
    const { comments } = this.props;

    return (
        <div className='comment-list'>
          <h2 className='subheader'>
            Comments: ({comments.commentList ? comments.commentList.length : 0})
          </h2>
          <ul>
            {comments.commentList && comments.commentList.map((comment) => (
              <li key={comment.id}>
                <h3>{comment.title}</h3>
                <p>{comment.author}</p>
                <p>{comment.voteScore}</p>
                <p>{comment.category}</p>
                <p>{comment.body}</p>
              </li>
            ))}
          </ul>
          <a>+ Add New Comment</a>
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
    fetchComments: (postId) => dispatch(fetchComments(postId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
