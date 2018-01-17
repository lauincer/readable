import React, { Component } from 'react';
import './App.css';
import Root from './Root'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Readable</h1>
        </header>
        <Root/>
      </div>
    );
  }
}

export default App;
