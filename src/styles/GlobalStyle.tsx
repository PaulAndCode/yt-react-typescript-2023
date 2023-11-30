import { createGlobalStyle, css } from 'styled-components';

interface GlobalStyleProps {
  $light?: boolean;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    ${(props) => {
      return props.$light != null && props.$light
        ? css`
            background-color: white;
            color: #282c34;
          `
        : css`
            background-color: #282c34;
            color: white;
          `;
    }}

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  }
`;

export default GlobalStyle;
