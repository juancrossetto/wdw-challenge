import React, { FC, InputHTMLAttributes } from 'react';
import './input.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: JSX.Element | string;
}

const Input: FC<InputProps> = ({ children, ...props }) => {
  return (
    <input type={props.type} {...props} onChange={props.onChange} className={`custom-input ${props.className}`}>
      {children}
    </input>
  );
};

export default Input;
