import theme from 'styles/theme';
import GlobalStyles from 'styles/GlobalStyles';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link href="/fonts/rubik/rubik.css" rel="stylesheet" />
    </Head>

    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
