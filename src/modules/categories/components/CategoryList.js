import React from 'react';

export default function CategoryList ({ list }) {
  return (
    <div className='category-list'>
      <h2 className='subheader'>
        Category List
      </h2>
      <ul>
        {list.map((item) => (
          <li key={item.name}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
