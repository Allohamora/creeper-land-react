import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { color, font } from 'styles/helpers';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    font-size: ${(p) => p.theme.ROOT_FS}px;
  }

  body {
    margin: 0;

    color: ${color('white')};
  
    font-weight: normal;
    font-size: 16px;
    /* stylelint-disable-next-line */
    font-family: ${font('primary')};
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: ${color('white')};
    text-decoration: none;
  
    &:visited {
      color: inherit;
    }
  }

  button {
    display: block;
    margin: 0;
    padding: 0;
  
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  
  ul {
    margin: 0;
    padding: 0;
  
    list-style: none;
  }
`;

export default GlobalStyles;