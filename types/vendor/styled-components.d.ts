import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: string[];
    fontSizes: number[];
    space: number[];
    color: {
      primary: string;
      secondary: string;
      black: string;
      white: string;
    };
  }
}
