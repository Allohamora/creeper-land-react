import theme from 'styles/theme';
import GlobalStyles from 'styles/GlobalStyles';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      {/** base */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      {/** meta */}
      <title>Creeper Land</title>
      <meta name="description" content="Creeper Land" />

      {/** icons and manifests */}
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/images/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="mask-icon"
        href="/images/favicon/safari-pinned-tab.svg"
        color="#49c125"
      />
      <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
      <meta
        name="apple-mobile-web-app-title"
        content="Creeper Land"
      />
      <meta name="application-name" content="Creeper Land" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta
        name="msapplication-config"
        content="/browserconfig.xml"
      />
      <meta name="theme-color" content="#ffffff" />

      {/** fonts */}
      <link href="/fonts/rubik/rubik.css" rel="stylesheet" />

      {/** extra-css */}
      <link href="/css/normalize.min.css" rel="stylesheet" />
    </Head>

    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
