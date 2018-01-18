import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App'
import registerServiceWorker from './registerServiceWorker';
import { default as category } from './modules/categories/CategoryReducer'
import { default as post } from './modules/posts/PostReducer'
import { default as comment } from './modules/comments/CommentReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  category,
  post,
  comment
 })

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
