import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      primaryAlt: string;
      lighter: string;

      background: string;
      text: string;
      textLight: string;
      title: string;
      input: string;

      container: string;
    };
  }
}
