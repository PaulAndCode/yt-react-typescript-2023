import React, { useState } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import { rotate } from './styles/keyframes';
import GlobalStyle from './styles/GlobalStyle';
import Button from './Button';

const AppWrapper = styled.div`
  text-align: center;
`;

const StyledHeader = styled.header`
  // background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  // color: white;
`;

const StyledLink = styled.a.attrs({
  href: 'https://reactjs.org',
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  color: #61dafb;
`;

const StyledLogo = styled.img.attrs({
  src: logo,
  alt: 'React.js logo',
})`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${rotate} infinite 20s linear;
  }
`;

function App(): JSX.Element {
  const [$light, setLightTheme] = useState<boolean>(false);
  return (
    <AppWrapper>
      <GlobalStyle $light={$light} />
      <Button
        handleClick={() => {
          setLightTheme(!$light);
        }}
        $light={$light}
      >
        Set theme to {$light ? 'dark' : 'light'}
      </Button>
      <StyledHeader>
        <StyledLogo />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <StyledLink>Learn React</StyledLink>
      </StyledHeader>
    </AppWrapper>
  );
}

export default App;
