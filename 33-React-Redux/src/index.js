import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// CreateStore is a function
import { createStore } from 'redux'
import reducer from './Redux/reducer'
// Provider is a Component
import {Provider} from 'react-redux'

const storeObj = createStore(reducer)

ReactDOM.render(
  <Provider store={storeObj}>
    <App />
  </Provider>
  , document.getElementById('root'));
