import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MyApp from './MyApp';

ReactDOM.render(
  <BrowserRouter>
    <MyApp />
  </BrowserRouter>,
  document.getElementById('root')
);
