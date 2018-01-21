import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment, editComment } from './../CommentActions'
import { generateId } from '../../../utils/utils';

class CommentCreate extends Component {
  handleSubmit(event) {
    const { comment, postId, addComment, editComment } = this.props;

    if (comment) {
      editComment(
        comment.id,
        {
          timestamp: Date.now(),
          body: this.body.value
        }
      );
    } else {
      addComment({
        id: generateId(),
        parentId: postId,
        timestamp: Date.now(),
        body: this.body.value,
        author: this.author.value
      });
    }
  }

  render() {
    const { comment } = this.props;

    return (
      <div className='post-create'>
        <h2 className='subheader'>
          {comment ? 'Edit Comment' : 'Create New Comment'}
        </h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Body</label>
            <input type='text' ref={(domNode) => { this.body = domNode }}
                   defaultValue={comment ? comment.body : ''} />
           {!comment &&
             <div>
                <label>Author</label>
                <input type='text' ref={(domNode) => { this.author = domNode }} />
              </div>
            }
            <input type='submit' value={comment ? 'Save' : 'Add Comment'}/>
        </form>
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
    addComment: (data) => dispatch(addComment(data)),
    editComment: (commentId, data) => dispatch(editComment(commentId, data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentCreate);
