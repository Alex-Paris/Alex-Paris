import { createGlobalStyle } from 'styled-components';

import {
  NormalFontSize,
  HeaderHeight,
  BodyFont,
  BodyColor,
  TextColor,
  TitleColor,
  FontSemiBold,
} from './variables';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    ${NormalFontSize}
    margin: 0 0 ${HeaderHeight} 0;
    font-family: ${BodyFont};
    background-color: ${BodyColor};
    color: ${TextColor};
  }

  h1, h2, h3, h4, h5, h6, strong {
    color: ${TitleColor};
    font-weight: ${FontSemiBold};
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  input, button {
    font-family: ${BodyFont};
    font-size: 16px;
  }

  button, a {
    cursor: pointer;
  }
`;
