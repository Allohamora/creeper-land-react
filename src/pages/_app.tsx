import theme from 'styles/theme';
import GlobalStyles from 'styles/GlobalStyles';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />

    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
