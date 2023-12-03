import React, { type FC, type PropsWithChildren } from 'react';
import styled from 'styled-components';

interface StyledButtonProps {
  $light?: boolean;
}
type ButtonProps = PropsWithChildren<{
  handleClick?: () => void;
  className?: string;
}> &
  StyledButtonProps;

export const StyledButton = styled.button<StyledButtonProps>`
  ${(props) => props.theme.current.button}

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
