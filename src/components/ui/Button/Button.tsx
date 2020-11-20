import React from 'react';
import clsx from 'clsx';
import { ButtonProps } from 'types/props';
import './Button.scss';

const Button: React.FC<ButtonProps> = ({ className, ...rest }) => (
  <button className={clsx('button', className)} {...rest} />
);

export default Button;
