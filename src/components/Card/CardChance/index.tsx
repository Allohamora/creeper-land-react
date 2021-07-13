import React from 'react';
import { PaletteColor } from 'styles/theme';
import { CardProps } from '../types';
import { Lines, Wrap, Icon, Content, Value, Title } from './styles';

export enum Rarity {
  COMMON = 'COMMON',
  RARE = 'RARE',
  EPIC = 'EPIC',
  LEGENDARY = 'LEGENDARY',
}

export const RarityToColor: Record<Rarity, PaletteColor> = {
  [Rarity.COMMON]: 'lime',
  [Rarity.RARE]: 'lime',
  [Rarity.EPIC]: 'lime',
  [Rarity.LEGENDARY]: 'lime',
};

export interface CardChanceProps extends CardProps {
  rarity?: Rarity;
}

export const CardChance: React.FC<CardChanceProps> = ({
  icon,
  title,
  value,
  rarity = Rarity.COMMON,
}) => {
  return (
    <Wrap>
      <Lines color={RarityToColor[rarity]} />

      <Content>
        <Title>{title}</Title>
        <Icon src={icon} />
        <Value>{value}</Value>
      </Content>
    </Wrap>
  );
};
