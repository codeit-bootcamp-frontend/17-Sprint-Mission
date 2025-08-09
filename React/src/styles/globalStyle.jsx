import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* This is where your reset rules go */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    color: inherit; /* Inherit color from parent */
    text-decoration: none;
  }

  button, input {
    font-family: inherit;
  }
`;

export default GlobalStyle;