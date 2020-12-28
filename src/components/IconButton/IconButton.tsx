import React from 'react';
import { ButtonProps } from 'types/props';
import { cn } from 'utils/bem';
import './IconButton.scss';

interface IconButtonProps extends ButtonProps {
  icon?: JSX.Element;
  menuX?: boolean;
}

const iconButton = cn('IconButton');

const IconButton: React.FC<IconButtonProps> = ({
  className,
  icon,
  menuX,
  ...rest
}) => (
  <button
    className={iconButton(null, [className])}
    {...rest}
  >
    {icon}
  </button>
);

export default IconButton;
