import React, { type FC, type ReactNode } from 'react';
import { css, ThemeProvider } from 'styled-components';

const theme = {
  button: css`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
  `,
  light: {
    button: css`
      background: #282c34;
      color: white;
      border: 2px solid #282c34;
    `,
  },
  dark: {
    button: css`
      border: 2px solid #282c34;
      background: white;
      color: #282c34;
    `,
  },
};
const Theme: FC<{
  children: ReactNode;
  $light?: boolean;
}> = ({ children, $light }) => {
  return (
    <ThemeProvider
      theme={{
        ...theme,
        current: $light != null && $light ? theme.light : theme.dark,
        $light,
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export default Theme;
