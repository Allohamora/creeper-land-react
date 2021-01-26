import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import BuyCard from 'components/Card/Buy';
import _ from 'lodash';
import {
  Items,
  Wrap,
  Delimiter,
  ItemsWrap,
  ItemsOverflowWrap,
} from './styles';
import { CaseContext, Items as ItemsType } from '../shared';
import { useRoulette } from './useRoulette';

type Generate = (
  count: number,
  items?: ItemsType,
) => ItemsType;

const generate: Generate = (
  count,
  items = [
    {
      id: '1',
      title: 'loader',
      value: '123',
      lines: 'black',
      icon: 'enderman',
      loader: true,
    },
  ],
) =>
  new Array(count)
    .fill(null)
    .map(() => _.sample(items)) as ItemsType;

const Roulette: React.FC = () => {
  const LINE_COUNT_MODIFIER = 3;

  const itemsWrapRef = useRef<null | HTMLDivElement>(null);
  const { status, setStatus, item } = useContext(
    CaseContext,
  );
  const {
    maxWidth,
    animate,
    count,
    CARD_MARGIN_RIGHT,
    CARD_WIDTH,
  } = useRoulette(
    itemsWrapRef,
    status,
    LINE_COUNT_MODIFIER,
  );
  const [isFirst, setIsFirst] = useState(true);
  const [line, setLine] = useState<ItemsType>([]);

  useEffect(() => {
    const oneRandom = () =>
      setLine(generate(count, item?.items));

    const fullLine = () =>
      isFirst
        ? generate(count * LINE_COUNT_MODIFIER, item?.items)
        : setLine([
            ...line,
            ...generate(
              count * LINE_COUNT_MODIFIER - 1,
              item?.items,
            ),
          ]);

    const oneLast = () =>
      setLine(line.slice(line.length - count));

    switch (status) {
      case 'loading':
        oneRandom();
        break;
      case 'start':
        fullLine();
        setStatus('started');
        break;
      case 'wait':
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        isFirst ? oneRandom() : oneLast();
        break;
      case 'ended':
        oneLast();
        setIsFirst(false);
        break;
      default:
        break;
    }
  }, [status, item]);

  const items = line.map(({ icon, loader }, i) => (
    <BuyCard
      key={i}
      width={CARD_WIDTH}
      icon={loader ? 'loader' : icon}
    />
  ));

  const transitionEndHandler = () => setStatus('ended');

  return (
    <Wrap>
      <Delimiter />

      <ItemsWrap>
        <div ref={itemsWrapRef}>
          <ItemsOverflowWrap maxWidth={maxWidth}>
            <Items
              cardMarginRight={CARD_MARGIN_RIGHT}
              animate={animate}
              onTransitionEnd={transitionEndHandler}
            >
              {items}
            </Items>
          </ItemsOverflowWrap>
        </div>
      </ItemsWrap>
    </Wrap>
  );
};

export default Roulette;
