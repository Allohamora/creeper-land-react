import React from 'react';
import { DivProps } from 'types/props';
import { Show } from 'types/modal';
import { cn } from 'utils/bem';
import './Backdrop.scss';

interface BackdropProps extends DivProps, Show {}

const backdrop = cn('Backdrop');

const Backdrop: React.FC<BackdropProps> = ({
  className,
  show,
  ...rest
}) => (
  <div
    className={backdrop({ show }, [className])}
    {...rest}
  />
);

export default Backdrop;
