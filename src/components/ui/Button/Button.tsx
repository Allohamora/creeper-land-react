import React from 'react';
import clsx from 'clsx';
import { ButtonProps as BaseButtonProps } from 'types/props';
import './Button.scss';

export interface ButtonProps extends BaseButtonProps {
  dark?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  dark,
  ...rest
}) => (
  <button
    className={clsx('button', dark && 'button_dark', className)}
    {...rest}
  />
);

export default Button;
