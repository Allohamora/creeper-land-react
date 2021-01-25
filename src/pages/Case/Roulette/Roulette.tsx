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
import { useMedia } from 'react-use';
import { ThemeContext } from 'styled-components';
import { Item, Types } from '../reducer';
import { BaseProps } from '../shared';

const getOdd = (num: number) =>
  num % 2 !== 0 ? num : num - 1;

const getCasesGenerator = (
  count: number,
  items: Item[] = [
    {
      id: 1,
      title: 'loader',
      value: '123',
      lines: 'black',
      icon: 'enderman',
      loader: true,
    },
  ],
) => () =>
  new Array(count).fill(null).map(() => _.sample(items));

const Roulette: React.FC<BaseProps> = ({
  state,
  dispatch,
}) => {
  const windowWidth = window.innerWidth;

  const [width, setWidth] = useState<number>(windowWidth);
  const itemsWrapRef = useRef<null | HTMLDivElement>(null);

  const theme = useContext(ThemeContext);
  const isMobile = useMedia(
    `(max-width: ${theme.breakpoints.mobile})`,
  );

  useEffect(() => {
    const hanlder = () => {
      setWidth(
        itemsWrapRef.current
          ? itemsWrapRef.current.clientWidth
          : windowWidth,
      );
    };

    hanlder();
    window.addEventListener('resize', hanlder);

    return () =>
      window.removeEventListener('resize', hanlder);
  }, [window]);

  const cardMarginRight = isMobile ? 5 : 10;
  const cardWidth = isMobile ? 56 : 110;

  const count = getOdd(
    Math.floor(width / (cardMarginRight + cardWidth)),
  );

  const maxWidth =
    (cardMarginRight + cardWidth) * count - cardMarginRight;

  const transitionEndHandler = () =>
    dispatch({ type: Types.ended });

  const animate =
    state.status === 'start' || state.status === 'started'
      ? {
          marginLeft: -(
            count *
            2 *
            (cardWidth + cardMarginRight)
          ),
          transition: '5s',
        }
      : null;

  const generator = getCasesGenerator(
    count,
    state.stateCase?.items,
  );
  const items = new Array(count)
    .fill(null)
    .map(() => generator())
    .reduce<Item[]>(
      (result, current) => [
        ...result,
        ...(current as Item[]),
      ],
      [],
    )
    .map(({ icon, loader }, i) => (
      <BuyCard key={i} icon={loader ? 'loader' : icon} />
    ));

  return (
    <Wrap>
      <Delimiter />

      <ItemsWrap>
        <div ref={itemsWrapRef}>
          <ItemsOverflowWrap maxWidth={maxWidth}>
            <Items
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
