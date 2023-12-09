import React, { type FC } from 'react';
import styled from 'styled-components';
import logo from 'assets/logo.svg';
import { rotate } from 'styles/keyframes';

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

const Home: FC = () => {
  return (
    <div>
      <h1>Home</h1>

      <StyledHeader>
        <StyledLogo />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <StyledLink>Learn React</StyledLink>
      </StyledHeader>
    </div>
  );
};

export default Home;
