import React from 'react';
import Typography from 'components/Typography';
import latestBuysMock from 'mock/latestBuys.json';
import Container from 'components/Container';
import Card from './Card';
import { IconType } from 'components/Card/icons';
import { latestBuys } from './shared';
import './LatestBuys.scss';

const LatestBuys: React.FC = () => {
  return (
    <div className={latestBuys()}>
      <Container className={latestBuys('container')}>
        <Typography
          variant="h2"
          weight="500"
          color="white"
          className={latestBuys('title')}
        >
          Последние покупки
        </Typography>

        <div className={latestBuys('cards-wrap')}>
          <div className={latestBuys('cards')}>
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
