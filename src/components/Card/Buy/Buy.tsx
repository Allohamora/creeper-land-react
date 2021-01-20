import React from 'react';
import { icons, IconType } from 'components/Card/icons';
import { Wrap, Icon } from './styles';

export interface BuyProps {
  icon: IconType;
  roulette?: boolean;
}

const Buy: React.FC<BuyProps> = ({ icon, ...props }) => (
  <Wrap {...props}>
    <Icon {...icons[icon]} />
  </Wrap>
);

export default Buy;
