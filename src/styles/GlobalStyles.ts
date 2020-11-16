import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    *,
    *::after,
    *::before {
      box-sizing: border-box;
    }

    html {
      /* 62.5% === 10px */
      font-size: 62.5%;
    }

    body {
      margin: 0;

      font-family: ${theme.font.primary};
      font-size: ${theme.pxToRem(16)};
      font-style: normal;
      font-weight: normal;

      color: ${theme.palette.white};

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    a {
      text-decoration: none;

      color: ${theme.palette.white};

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
