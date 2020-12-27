import React from 'react';
import { DivProps } from 'types/props';
import { cn } from 'utils/bem';
import './Container.scss';

export type ContainerProps = DivProps;

const container = cn('Container');

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...rest
}) => (
  <div className={container(null, [className])} {...rest}>
    {children}
  </div>
);

export default Container;
