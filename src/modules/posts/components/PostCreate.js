import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { postPost } from './../PostActions'
import { generateId } from '../../../utils/utils';

class PostCreate extends Component {
  state = {
    redirect: false
  }

  handleSubmit(event) {
    const { addPost } = this.props;

    addPost({
      id: generateId(),
      timestamp: Date.now(),
      title: this.title.value,
      body: this.body.value,
      author: this.author.value,
      category: this.category.value
    });

    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/'/>;
     }

    return (
      <div className='post-create'>
        <h2 className='subheader'>
          Create New Post
        </h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Title</label>
            <input type='text' ref={(domNode) => { this.title = domNode }} />
            <label>Body</label>
            <input type='text' ref={(domNode) => { this.body = domNode }} />
            <label>Author</label>
            <input type='text' ref={(domNode) => { this.author = domNode }} />
            <label>Category</label>
            <input type='text' ref={(domNode) => { this.category = domNode }} />
            <input type='submit' value='Add Post'/>
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
    addPost: (data) => dispatch(postPost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCreate);
