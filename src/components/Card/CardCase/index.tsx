import React from 'react';
import { CardProps } from '../types';
import { Wrap, Title, Icon, Value } from './styles';

export const CardCase: React.FC<CardProps> = ({
  title,
  icon,
  value,
  ...rest
}) => (
  <Wrap {...rest}>
    <Title>{title}</Title>
    <Icon src={icon} />
    <Value>{value}</Value>
  </Wrap>
);
