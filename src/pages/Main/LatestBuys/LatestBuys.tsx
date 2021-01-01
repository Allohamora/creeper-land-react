import React from 'react';
import Typography from 'components/Typography';
import latestBuysMock from 'mock/latestBuys.json';
import Container from 'components/Container';
import Card from './Card';
import { IconType } from 'components/Card/icons';
import './LatestBuys.scss';

const block = 'main-latest-buys';
const LatestBuys: React.FC = () => {
  return (
    <div className={block}>
      <Container className={`${block}__container`}>
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
      </Container>
    </div>
  );
};

export default LatestBuys;
