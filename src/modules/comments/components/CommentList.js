import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments, deleteComment } from './../CommentActions'
import CommentCreate from './CommentCreate'

class CommentList extends Component {
  state = {
    showAddForm: false,
    showEditFormId: false
  }

  constructor(props, context) {
      super(props, context);
      this.props.fetchComments(this.props.postId);
  }

  addComment() {
    this.setState({
      showAddForm: true
    });
  }

  editComment(commentId) {
    this.setState({
      showEditFormId: commentId
    });
  }

  deleteComment(commentId) {
    const { deleteComment } = this.props;
    deleteComment(commentId);
  }

  showEditForm(commentId) {
    return this.state.showEditFormId === commentId;
  }

  renderComment(comment) {
    const { postId } = this.props;

    if (this.showEditForm(comment.id)) {
      return (
        <CommentCreate postId={postId} comment={comment} key={comment.id} />
      )
    } else {
      return (
        <li key={comment.id}>
          <h3>
            {comment.title}
            <button onClick={() => this.editComment(comment.id)}>Edit</button>
            <button onClick={() => this.deleteComment(comment.id)}>Delete</button>
          </h3>
          <p>{comment.author}</p>
          <p>{comment.voteScore}</p>
          <p>{comment.category}</p>
          <p>{comment.body}</p>
        </li>
      )
    }
  }

  render() {
    const { comments, postId } = this.props;
    const { showAddForm } = this.state;

    return (
        <div className='comment-list'>
          <h2 className='subheader'>
            Comments: ({comments.commentList ? comments.commentList.length : 0})
          </h2>
          <ul>
            {comments.commentList && comments.commentList.map((comment) => (
              this.renderComment(comment)
            ))}
          </ul>
          <button onClick={() => this.addComment()}>+ Add New Comment</button>
          {showAddForm &&
            <CommentCreate postId={postId} />
          }
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
    fetchComments: (postId) => dispatch(fetchComments(postId)),
    deleteComment: (data) => dispatch(deleteComment(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
