import React, { type FC, type PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

interface StyledButtonProps {
  $light?: boolean;
}
type ButtonProps = PropsWithChildren<{
  handleClick?: () => void;
  className?: string;
}> &
  StyledButtonProps;

export const StyledButton = styled.button<StyledButtonProps>`
  ${(props) =>
    props.$light != null && props.$light
      ? css`
          background: #282c34;
          color: white;
          border: 2px solid #282c34;
        `
      : css`
          border: 2px solid #282c34;
          background: white;
          color: #282c34;
        `}

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

const Button: FC<ButtonProps> = (props) => {
  const { className, children, handleClick, $light } = props;
  return (
    <StyledButton className={className} onClick={handleClick} $light={$light}>
      {children}
    </StyledButton>
  );
};

export default Button;
