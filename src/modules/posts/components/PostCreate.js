import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { addPost, editPost } from './../PostActions'
import { generateId } from '../../../utils/utils';

class PostCreate extends Component {
  state = {
    redirect: false
  }

  handleSubmit(event) {
    const { post, addPost, editPost } = this.props;

    if (post) {
      editPost(
        post.id,
        {
          title: this.title.value,
          body: this.body.value
        }
      );
    } else {
      addPost({
        id: generateId(),
        timestamp: Date.now(),
        title: this.title.value,
        body: this.body.value,
        author: this.author.value,
        category: this.category.value
      });
    }

    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;
    const { categoryName, post } = this.props;

     if (redirect) {
       if (post) {
         return <Redirect to={`/${post.category}/${post.id}`} />;
       } if (categoryName) {
         return <Redirect to={`/${categoryName}`} />;
       }
       return <Redirect to='/' />;
     }

    return (
      <div className='content'>
        <h1>
          {post ? 'Edit Post' : 'Create New Post'}
        </h1>
        <hr/>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Title</label>
            <input type='text' ref={(domNode) => { this.title = domNode }}
                   defaultValue={post ? post.title : ''} />
            <label>Body</label>
            <input type='text' ref={(domNode) => { this.body = domNode }}
                   defaultValue={post ? post.body : ''} />
           {!post &&
             <div>
                <label>Author</label>
                <input type='text' ref={(domNode) => { this.author = domNode }} />
                <label>Category</label>
                <input type='text' ref={(domNode) => { this.category = domNode }}
                   defaultValue={categoryName ? categoryName : ''}/>
              </div>
            }
            <input className='btn' type='submit' value={post ? 'Edit Post' : 'Add Post'}/>
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
    addPost: (data) => dispatch(addPost(data)),
    editPost: (postId, data) => dispatch(editPost(postId, data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCreate);
