import React from 'react';
import latestBuysMock from 'mock/latestBuys.json';
import { Container } from 'components/Container';
import { CardBuy as Card } from 'components/Card/CardBuy';
import { Wrap, Title, Cards, CardsWrap } from './styles';

export const LatestBuys: React.FC = () => (
  <Wrap>
    <Container>
      <Title>Последние покупки</Title>

      <CardsWrap>
        <Cards>
          {latestBuysMock.map(({ icon }, i) => (
            <Card key={i} icon={icon} />
          ))}
        </Cards>
      </CardsWrap>
    </Container>
  </Wrap>
);
