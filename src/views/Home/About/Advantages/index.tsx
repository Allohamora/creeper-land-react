import React from 'react';
import advantagesMockData from 'mock/advantages.json';
import { Typography } from 'components/Typography';
import {
  CardAbout as Card,
  IconType,
} from 'components/Card/CardAbout';
import { Wrap, Cards } from './styles';

export const Advantages: React.FC = () => (
  <Wrap>
    <Typography variant="h2" color="white" weight="500">
      Преимущества
    </Typography>

    <Cards>
      {advantagesMockData.map(({ icon, ...rest }, i) => (
        <Card key={i} icon={icon as IconType} {...rest} />
      ))}
    </Cards>
  </Wrap>
);
