import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';
import { Routes } from 'pages/Routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* styles */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <GlobalStyles />

        {/* content */}
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
