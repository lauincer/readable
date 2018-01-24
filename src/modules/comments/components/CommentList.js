import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments, deleteComment, voteComment } from './../CommentActions'
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

  voteComment(commentId, vote) {
    const { voteComment } = this.props;
    voteComment(commentId, { option: vote });
  }

  showEditForm(commentId) {
    return this.state.showEditFormId === commentId;
  }

  onCommentAdded() {
    this.setState({
      showAddForm: false,
      showEditFormId: false
    });
  }

  renderComment(comment) {
    const { postId } = this.props;

    if (this.showEditForm(comment.id)) {
      return (
        <CommentCreate
          postId={postId}
          comment={comment}
          addEditCallback={() => this.onCommentAdded()}
          key={comment.id} />
      )
    } else {
      return (
        <li key={comment.id}>
          <h3>
            {comment.title}
            <button className='btn btn--left' onClick={() => this.editComment(comment.id)}>Edit</button>
            <button className='btn' onClick={() => this.deleteComment(comment.id)}>Delete</button>
          </h3>
          <p className='block'>
            Vote:&nbsp;
            <button className='btn btn--left btn--vote' onClick={() => this.voteComment(comment.id, 'upVote')}>:)</button>
            <button className='btn btn--vote' onClick={() => this.voteComment(comment.id, 'downVote')}>:(</button>
          </p>
          <p className='author'>by {comment.author}</p>
          <p className='score'>score: {comment.voteScore}</p>
          <p>{comment.category}</p>
          <p>{comment.body}</p>
          <hr/>
        </li>
      )
    }
  }

  render() {
    const { comments, postId } = this.props;
    const { showAddForm } = this.state;

    return (
        <div className='comments-block'>
          <h2>Comments: ({comments.commentList ? comments.commentList.length : 0})</h2>
          <ul>
            {comments.commentList && comments.commentList.map((comment) => (
              this.renderComment(comment)
            ))}
          </ul>
          {!showAddForm &&
            <button className='btn' onClick={() => this.addComment()}>+ Add New Comment</button>
          }
          {showAddForm &&
            <CommentCreate postId={postId} addEditCallback={() => this.onCommentAdded()} />
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
    deleteComment: (data) => dispatch(deleteComment(data)),
    voteComment: (commentId, data) => dispatch(voteComment(commentId, data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
