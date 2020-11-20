import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';
import { Routes } from 'pages/Routes';

export const App: React.FC = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      {/* styles */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <GlobalStyles />

      {/* content */}
      <Routes />
    </ThemeProvider>
  </BrowserRouter>
);
