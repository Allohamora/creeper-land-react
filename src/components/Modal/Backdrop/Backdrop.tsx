import React from 'react';
import clsx from 'clsx';
import { DivProps } from 'types/props';
import { Show } from 'types/modal';
import './Backdrop.scss';

interface BackdropProps extends DivProps, Show {}

const block = 'backdrop';

const Backdrop: React.FC<BackdropProps> = ({
  className,
  show,
  ...rest
}) => (
  <div
    className={clsx(
      block,
      show && `${block}_show`,
      className,
    )}
    {...rest}
  />
);

export default Backdrop;
