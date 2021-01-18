import React from 'react';
import { icons, IconType } from 'components/Card/icons';
import { Wrap, Icon } from './styles';

interface CardProps {
  icon: IconType;
}

const Card: React.FC<CardProps> = ({ icon }) => (
  <Wrap>
    <Icon {...icons[icon]} />
  </Wrap>
);

export default Card;
