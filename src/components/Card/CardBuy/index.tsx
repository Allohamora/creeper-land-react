import React from 'react';
import { Wrap, Icon } from './styles';

export interface CardBuyProps {
  icon: string;
  roulette?: boolean;
  width?: number;
}

export const CardBuy: React.FC<CardBuyProps> = ({
  icon,
  ...props
}) => (
  <Wrap {...props}>
    {icon !== 'loader' ? <Icon src={icon} /> : <Icon as="div" />}
  </Wrap>
);
