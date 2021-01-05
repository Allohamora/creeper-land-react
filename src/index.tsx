import React from 'react';
import ReactDOM from 'react-dom';
/* eslint-disable */
import 'styles/global.scss'; // first: load global styles
import App from 'App'; // load app with app styles
/* eslint-enable */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
