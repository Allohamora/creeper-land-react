import Typography from 'components/Typography';
import React from 'react';
import latestBuysMock from 'mock/latestBuys.json';
import Card from './Card';
import { IconType } from '../Shop/ShopBlock/TabCard';
import './LatestBuys.scss';

const block = 'main-latest-buys';
const LatestBuys: React.FC = () => {
  return (
    <div className={block}>
      <Typography
        variant="h2"
        weight="500"
        color="white"
        className={`${block}__title`}
      >
        Последние покупки
      </Typography>

      <div className={`${block}__cards`}>
        <div className={`${block}__cards-inner`}>
          {latestBuysMock.map(({ icon }, i) => (
            <Card key={i} icon={icon as IconType} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBuys;
