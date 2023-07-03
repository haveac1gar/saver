import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    color: black;
    margin: 0;
    min-height: 100%;
  }

  html {
    min-height: 100%;
  }

  #root {
    min-height: 100%;
  }

  * {
    font-family: 'Martian Mono', sans-serif;
  }
`;
