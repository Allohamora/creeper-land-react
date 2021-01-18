import React from 'react';
import { ContainedButton, OutlinedButton } from './styles';
import { Button as iButton } from 'types/props';

export interface ButtonProps extends iButton {
  variant?: 'contained' | 'outlined';
}

const variants = {
  contained: ContainedButton,
  outlined: OutlinedButton,
};

const Button: React.FC<ButtonProps> = ({
  variant = 'outlined',
  ...props
}) => {
  const Component = variants[variant];

  return <Component {...props} />;
};

export default Button;
