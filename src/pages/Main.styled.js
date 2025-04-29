import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  #root {
    text-align: center;
    margin: 0 auto;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    letter-spacing: 0px;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button,
  ._btn {
    cursor: pointer;
    outline: none;
  }

  ul li {
    list-style: none;
  }

  @keyframes card-animation {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: auto;
      opacity: 1;
    }
  }

  html,
  body {
    width: 100%;
    height: 100%;
    padding-right: calc(50% - 600px);
    padding-left: calc(50% - 600px);
    font-family: Montserrat;
    background-color: #f4f5f6;
    color: #000000
  }
`;
