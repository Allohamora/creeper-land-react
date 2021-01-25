import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import BuyCard from 'components/Card/Buy';
import {
  Items,
  Wrap,
  Delimiter,
  ItemsWrap,
  ItemsOverflowWrap,
} from './styles';
import { useMedia } from 'react-use';
import { ThemeContext } from 'styled-components';
import { Dispatch, State, Types } from '../reducer';

const getOdd = (num: number) =>
  num % 2 !== 0 ? num : num - 1;

interface RouletteProps {
  state: State;
  dispatch: Dispatch;
}

const Roulette: React.FC<RouletteProps> = ({
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
              {new Array(count * 3)
                .fill(null)
                .map((_, i) => (
                  <BuyCard
                    key={i}
                    roulette
                    icon="enderman"
                  />
                ))}
            </Items>
          </ItemsOverflowWrap>
        </div>
      </ItemsWrap>
    </Wrap>
  );
};

export default Roulette;
