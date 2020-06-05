import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from 'redux'
import {Provider} from 'react-redux'

import rooms_reducer from './reducer/rooms_reducer'
let store = createStore(              //==> take reducer
  rooms_reducer,
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
)

ReactDOM.render(
  <Provider store = {store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
