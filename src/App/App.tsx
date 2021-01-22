import React from 'react';
import Routes from 'pages/Routes';
import AppProvider from './AppProvider';
import ErrorBoundary from 'components/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => (
  <ErrorBoundary>
    <AppProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppProvider>
  </ErrorBoundary>
);

export default App;
