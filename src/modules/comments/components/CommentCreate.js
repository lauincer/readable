import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment, editComment } from './../CommentActions'
import { generateId } from '../../../utils/utils';

class CommentCreate extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { comment, postId, addComment, editComment, addEditCallback } = this.props;

    // validate empty fields
    if (!this.body.value || (!comment && !this.author.value)) {
      return false;
    }

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

    addEditCallback();
  }

  render() {
    const { comment } = this.props;

    return (
      <div className='block'>
        <h3>{comment ? 'Edit Comment' : 'Create New Comment'}</h3>
        <form onSubmit={this.handleSubmit}>
            <label>Body</label>
            <input type='text' ref={(domNode) => { this.body = domNode }}
                   defaultValue={comment ? comment.body : ''} />
           {!comment &&
             <div>
                <label>Author</label>
                <input type='text' ref={(domNode) => { this.author = domNode }} />
              </div>
            }
            <input className='btn' type='submit' value={comment ? 'Save' : 'Add Comment'}/>
        </form>
        <hr/>
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
