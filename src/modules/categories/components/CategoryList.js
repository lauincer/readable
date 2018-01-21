import React from 'react';
import { Link } from 'react-router-dom'

export default function CategoryList ({ list }) {
  return (
    <div className='nav-bar'>
      <ul className='nav'>
        {list && list.map((item) => (
          <li key={item.name}>
            <Link to={`/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
