import React from 'react';
import Shop from './Shop';
import Case from './Case';
import { CardProps } from './shared';

interface Props extends CardProps {
  variant?: 'shop' | 'case';
}

const Card: React.FC<Props> = ({
  variant = 'shop',
  ...props
  // eslint-disable-next-line consistent-return
}) => {
  // eslint-disable-next-line default-case
  switch (variant) {
    case 'shop':
      return <Shop {...props} />;
    case 'case':
      return <Case {...props} />;
  }
};

export default Card;
