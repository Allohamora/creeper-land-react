import React from 'react';
import { icons } from '../icons';
import { CardProps } from '../shared';
import { Wrap, Title, Icon, Value } from './styles';

const Shop: React.FC<CardProps> = ({
  title,
  icon,
  value,
}) => (
  <Wrap>
    <Title>{title}</Title>
    <Icon {...icons[icon]} />
    <Value>{value}</Value>
  </Wrap>
);

export default Shop;
