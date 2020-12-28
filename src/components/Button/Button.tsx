import React from 'react';
import clsx from 'clsx';
import { ButtonProps as BaseButtonProps } from 'types/props';
import { getModifiers } from 'utils/ui';
import './Button.scss';
import { cn } from 'utils/bem';

const button = cn('Button');

const rawVariants = ['outlined', 'contained'] as const;
const variants = getModifiers(button(), rawVariants);

const rawColors = ['lime'] as const;
const colors = getModifiers(button(), rawColors);

export interface ButtonProps extends BaseButtonProps {
  variant?: typeof rawVariants[number];
  color?: typeof rawColors[number];
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'outlined',
  color = 'lime',
  ...rest
}) => (
  <button
    className={clsx(
      button(),
      variants[variant],
      colors[color],
      className,
    )}
    {...rest}
  />
);

export default Button;
