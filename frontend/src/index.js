import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';

const a = false;


ReactDOM.render(
  <React.StrictMode>
    {a ? <App /> : <h1>hellow</h1>}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

