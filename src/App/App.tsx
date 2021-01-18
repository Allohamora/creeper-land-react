import React from 'react';
import Routes from 'pages/Routes';
import AppProvider from './AppProvider';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => (
  <AppProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </AppProvider>
);

export default App;
