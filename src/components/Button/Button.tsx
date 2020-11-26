import React from 'react';
import clsx from 'clsx';
import { ButtonProps as BaseButtonProps } from 'types/props';
import { getModifiers } from 'utils/ui';
import './Button.scss';

const block = 'button';

const rawVariants = ['outlined', 'contained'] as const;
const variants = getModifiers(block, rawVariants);

const rawColors = ['lime'] as const;
const colors = getModifiers(block, rawColors);

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
      block,
      variants[variant],
      colors[color],
      className,
    )}
    {...rest}
  />
);

export default Button;
