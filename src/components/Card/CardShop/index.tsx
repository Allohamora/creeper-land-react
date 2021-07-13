import React from 'react';
import { CardProps } from '../types';
import { Wrap, Title, Icon, Value } from './styles';

export const CardShop: React.FC<CardProps> = ({
  title,
  icon,
  value,
  ...props
}) => (
  <Wrap {...props}>
    <Title>{title}</Title>
    <Icon src={icon} />
    <Value>{value}</Value>
  </Wrap>
);
