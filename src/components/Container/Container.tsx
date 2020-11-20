import React from 'react';
import clsx from 'clsx';
import { DivProps } from 'types/props';
import './Container.scss';

const Container: React.FC<DivProps> = ({
  children,
  className,
  ...rest
}) => (
  <div className={clsx('container', className)} {...rest}>
    {children}
  </div>
);

export default Container;
