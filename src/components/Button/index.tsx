import React, { FC } from 'react';
import { Button as BootstrapButton, ButtonProps as BootstrapButtonProps } from 'react-bootstrap';
import './button.scss';

interface ButtonProps {
  children?: JSX.Element | string;
}

const Button: FC<BootstrapButtonProps & ButtonProps> = ({ children, ...props }) => {
  return (
    <BootstrapButton {...props} className={`custom-button ${props.className}`} data-testid={'btn-test'}>
      {children}
    </BootstrapButton>
  );
};

export default Button;
