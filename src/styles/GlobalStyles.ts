import { createGlobalStyle, css } from 'styled-components';
import { REM } from './theme';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    *, *::after, *::before {
      box-sizing: border-box;
    }

    html {
      font-size: ${REM}px;
    }

    body {
      margin: 0;
      
      font-family: ${theme.font.primary};
      font-size: ${theme.pxToRem(16)};

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    a {
      text-decoration: none;

      color: ${theme.color.primary};

      &:visited {
        color: inherit;
      }
    }

    button {
      display: block;

      margin: 0;
      padding: 0;

      outline: none;
      border: none;
      cursor: pointer;
      background: transparent;
    }

    ul {
      margin: 0;
      padding: 0;

      list-style: none;
    }
  `}
`;
