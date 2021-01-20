import React from 'react';
import BuyCard from 'components/Card/Buy';
import {
  Items,
  Wrap,
  Delimiter,
  ItemsWrap,
} from './styles';

const Roulette: React.FC = () => (
  <Wrap>
    <Delimiter />

    <ItemsWrap>
      <Items>
        {new Array(30).fill(null).map((_, i) => (
          <BuyCard key={i} roulette icon="enderman" />
        ))}
      </Items>
    </ItemsWrap>
  </Wrap>
);

export default Roulette;
