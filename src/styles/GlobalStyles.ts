import { createGlobalStyle } from "styled-components";
import { REM } from "./theme";

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: ${REM}px;
  }

  body {
    margin: 0;
    font-family: 'Rubik', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;