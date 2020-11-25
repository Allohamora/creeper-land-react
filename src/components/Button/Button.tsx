import React from 'react';
import clsx from 'clsx';
import { ButtonProps as BaseButtonProps } from 'types/props';
import { getModifiers } from 'utils/ui';
import './Button.scss';

const base = 'button';

const rawVariants = ['outlined', 'contained'] as const;
const variants = getModifiers(base, rawVariants);

const rawColors = ['lime'] as const;
const colors = getModifiers(base, rawColors);

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
    className={clsx(base, variants[variant], colors[color])}
    {...rest}
  />
);

export default Button;
