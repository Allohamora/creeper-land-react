import React, { useContext } from 'react';
import BuyCard from 'components/Card/Buy';
import {
  Items,
  Wrap,
  Delimiter,
  ItemsWrap,
  ItemsOverflowWrap,
  OverflowWrap,
} from './styles';
import { CaseContext } from '../shared';
import { getMaxWidth } from '../size';

interface RouletteProps {
  onTransitionEnd: () => void;
}

const Roulette: React.FC<RouletteProps> = ({
  onTransitionEnd,
}) => {
  const { line, sizes, animate, count } = useContext(
    CaseContext,
  );
  const {
    roulette: {
      cardWidth,
      cardMarginRight,
      containerHorizontalPadding,
    },
  } = sizes;

  const maxWidth = getMaxWidth(count, sizes);

  const items = line.map(({ icon, loader }, i) => (
    <BuyCard
      key={i}
      width={cardWidth}
      icon={loader ? 'loader' : icon}
    />
  ));

  return (
    <Wrap>
      <Delimiter />

      <ItemsWrap
        horizontalPadding={containerHorizontalPadding}
      >
        <OverflowWrap>
          <ItemsOverflowWrap maxWidth={maxWidth}>
            <Items
              cardMarginRight={cardMarginRight}
              animate={animate}
              onTransitionEnd={onTransitionEnd}
            >
              {items}
            </Items>
          </ItemsOverflowWrap>
        </OverflowWrap>
      </ItemsWrap>
    </Wrap>
  );
};

export default Roulette;
