import React, { useLayoutEffect } from 'react';
import Routes from 'pages/Routes';
import AppProvider from './AppProvider';
import ErrorBoundary from 'components/ErrorBoundary';
import {
  BrowserRouter,
  useLocation,
} from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => (
  <ErrorBoundary>
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes />
      </BrowserRouter>
    </AppProvider>
  </ErrorBoundary>
);

export default App;
