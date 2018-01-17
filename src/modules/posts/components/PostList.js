import React from 'react';

export default function PostList ({ list }) {
  return (
    <div className='post-list'>
      <h2 className='subheader'>
        Post List
      </h2>
      <ul>
        {list && list.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.author}</p>
            <p>{post.voteScore}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
