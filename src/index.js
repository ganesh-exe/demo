import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {  Provider } from 'react-redux';
import { rootreducer } from './Reducers/reducers';
import { createStore } from 'redux';

const store=createStore(rootreducer);

ReactDOM.render(
    <Provider store={store}>
    <App /></Provider>

 ,
  document.getElementById('root')
);


