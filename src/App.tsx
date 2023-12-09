import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Button from './Button';
import Theme from 'providers/Theme';
import Router from 'providers/Router';

const AppWrapper = styled.div`
  text-align: center;
`;

function App(): JSX.Element {
  const [$light, setLightTheme] = useState<boolean>(false);
  return (
    <Theme $light={$light}>
      <AppWrapper>
        <GlobalStyle $light={$light} />
        <Router />
        <Button
          handleClick={() => {
            setLightTheme(!$light);
          }}
          $light={$light}
        >
          Set theme to {$light ? 'dark' : 'light'}
        </Button>
      </AppWrapper>
    </Theme>
  );
}

export default App;
