import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App'
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// ToDo: import reducers

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// ToDo: combineReducers
// const reducer = combineReducers({
//   food,
//   calendar,
//  })

// ToDo: createStore
// const store = createStore(
//   reducer
// )
// const store = () => createStore(rootReducer, applyMiddleware(thunk));

// ToDo: wrap with <Provider>
// <Provider store={store}>

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
