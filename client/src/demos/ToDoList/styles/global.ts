import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    /* Colors */
    --gray-100: #f2f2f2;
    --gray-200: #d9d9d9;
    --gray-300: #808080;
    --gray-400: #333333;
    --gray-500: #262626;
    --gray-600: #1a1a1a;
    --gray-700: #0d0d0d;

    --purple: #8284fA;
    --purple-dark: #5e60ce;

    --blue: #4ea8de;
    --blue-dark: #1e6f9f;

    --danger: #e25858;

    /* Sizes */
    --max-width: 736px;
    --main-padding: 1.25rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--gray-600);
    color: var(--gray-100);
    -webkit-font-smoothing: antialiased;
  }

  button {
    border: none;
    cursor: pointer;
    background: none;
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 140%;
  }

  :focus {
    outline: transparent;
    /* box-shadow: 0 0 0 1px var(--purple-dark); */
}
`;
