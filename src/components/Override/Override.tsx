import React from 'react';
import { BaseProps, DivProps } from 'types/props';

export interface OverrideProps extends BaseProps, DivProps {
  component?: React.ElementType<DivProps>;
  [prop: string]: any;
}

const Override: React.FC<OverrideProps> = ({
  component: Component = 'div',
  ...props
}) => <Component {...props} />;

export default Override;
