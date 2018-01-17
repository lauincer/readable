import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import Root from './Root'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Readable</h1>
          <Link to='/'>Home</Link>
        </header>
        <Root/>
      </div>
    );
  }
}

export default App;
