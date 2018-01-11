import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Root from './Root'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Readable</h1>
        </header>
        <Route exact path="/" render={() => (
          <Root/>
        )}/>
      </div>
    );
  }
}

export default App;
