import { createGlobalStyle } from 'styled-components';

import {
  NormalFontSize,
  HeaderHeight,
  BodyFont,
  FontSemiBold,
} from './variables';
import { device } from './device';

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
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};

    @media ${device.laptopMin} {
      margin: 0;
    }
  }

  h1, h2, h3, h4, h5, h6, strong {
    color: ${(props) => props.theme.colors.title};
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

  ::-webkit-scrollbar {
    width: 0.60rem;
    background-color: ${(props) => props.theme.colors.scrollBar};
    border-radius: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.scrollThumb};
    border-radius: 0.5rem;

    &:hover {
      background-color: ${(props) => props.theme.colors.textLight};
    }
  }
`;
