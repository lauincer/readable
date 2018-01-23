import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import Root from './Root'

export default function App () {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Readable</h1>
        <Link to='/'>Home</Link>
      </header>
      <Root/>
    </div>
  )
}
