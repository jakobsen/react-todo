import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif; 
    font-size: 18px;
    --color-primary: hsl(194, 85%, 65%);
    --color-primary-light: hsl(194, 85%, 80%);
    --color-primary-dark: hsl(194, 85%, 35%);
  }

  h1 {
    font-size: 32px;
    font-weight: bold;
  }
`;

export default GlobalStyles;
