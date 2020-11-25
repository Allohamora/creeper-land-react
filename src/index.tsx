import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/global.scss'; // first: load global styles
import App from 'containers/App'; // second: load app with app styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
