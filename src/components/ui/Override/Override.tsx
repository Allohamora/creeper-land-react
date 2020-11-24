import React from 'react';
import { BaseProps, DivProps } from 'types/props';

export interface OverrideProps extends DivProps, BaseProps {
  component?: React.ElementType<DivProps>;
}

const Override: React.FC<OverrideProps> = ({
  component: Component = 'div',
  ...props
}) => <Component {...props} />;

export default Override;
