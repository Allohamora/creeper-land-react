import React from 'react';
import clsx from 'clsx';
import { BaseProps, DivProps } from 'types/props';
import { getVariants } from 'utils/ui';
import './Heading.scss';

const base = 'heading';
const rawVariants = ['h1', 'h2', 'h3', 'h4'] as const;
const variants = getVariants(base, rawVariants);

export interface HeadingProps extends BaseProps, DivProps {
  variant?: typeof rawVariants[number];
  component?: React.ElementType;
}

const Heading: React.FC<HeadingProps> = ({
  component = 'div',
  variant = 'h4',
  className,
  ...props
}) => {
  const Component = component;

  return (
    <Component
      className={clsx('heading', variants[variant], className)}
      {...props}
    />
  );
};

export default Heading;
