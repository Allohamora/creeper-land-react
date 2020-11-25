import React from 'react';
import clsx from 'clsx';
import { DivProps } from 'types/props';
import './Container.scss';

export type ContainerProps = DivProps;

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...rest
}) => (
  <div className={clsx('container', className)} {...rest}>
    {children}
  </div>
);

export default Container;
