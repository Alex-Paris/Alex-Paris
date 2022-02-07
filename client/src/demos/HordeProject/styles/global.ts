import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

import { BodyFont, NormalFontSize } from '../../../styles/variables';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${(props) => shade(0.8, props.theme.colors.lighter)};
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    ${NormalFontSize}
    font-family: ${BodyFont};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
