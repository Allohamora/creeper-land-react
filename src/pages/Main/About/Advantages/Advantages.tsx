import React from 'react';
import Typography from 'components/Typography';
import advantagesMockData from 'mock/advantages.json';
import Card, { IconType } from './Card';
import './Advantages.scss';

const block = 'main-about-advantages';
const Advantages: React.FC = () => {
  return (
    <div className={block}>
      <Typography variant="h2" color="white" weight="500">
        Преимущества
      </Typography>

      <div className={`${block}__cards`}>
        {advantagesMockData.map(({ icon, ...rest }, i) => (
          <Card key={i} icon={icon as IconType} {...rest} />
        ))}
      </div>
    </div>
  );
};

export default Advantages;
