import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log("Ahhh looking under the hood are we?\n\nWell go on then.... we've nothing to hide ;)\n\nIf you do... umm... find something that we probably should be hiding though...\nmaybe open a github issue for us? That'd be great <3\n\nOr not... I don't know... all's fair in love and crypto I suppose");

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
