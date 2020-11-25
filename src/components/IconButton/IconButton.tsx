import React from 'react';
import clsx from 'clsx';
import { ButtonProps } from 'types/props';
import './IconButton.scss';

interface IconButtonProps extends ButtonProps {
  icon?: JSX.Element;
  menuX?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  className,
  icon,
  menuX,
  ...rest
}) => (
  <button className={clsx('icon-button', className)} {...rest}>
    {icon}
  </button>
);

export default IconButton;
