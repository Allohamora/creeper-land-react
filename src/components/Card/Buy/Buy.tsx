import React from 'react';
import { icons, IconType } from 'components/Card/icons';
import { Wrap, Icon } from './styles';

export interface BuyProps {
  icon: IconType;
}

const Buy: React.FC<BuyProps> = ({ icon }) => (
  <Wrap>
    <Icon {...icons[icon]} />
  </Wrap>
);

export default Buy;
