import React from 'react';
import Typography from 'components/Typography';
import advantagesMockData from 'mock/advantages.json';
import Card, { IconType } from '../Card';
import { about } from '../shared';

const Advantages: React.FC = () => {
  return (
    <div className={about('advantages')}>
      <Typography variant="h2" color="white" weight="500">
        Преимущества
      </Typography>

      <div className={about('cards')}>
        {advantagesMockData.map(({ icon, ...rest }, i) => (
          <Card key={i} icon={icon as IconType} {...rest} />
        ))}
      </div>
    </div>
  );
};

export default Advantages;
