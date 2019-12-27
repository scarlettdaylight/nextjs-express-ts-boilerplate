import { DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
  breakpoints: ['480px', '576px', '768px', '992px', '1200px', '1600px'],
  space: [0, 4, 8, 16, 24, 32, 48, 56, 64],
  fontSizes: [12, 14, 16, 20, 24, 30, 38],
  color: {
    primary: '#333333',
    secondary: '#222222',
    black: '#333333',
    white: '#fff',
  },
};

export default Theme;
