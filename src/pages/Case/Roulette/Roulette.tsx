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

const getOdd = (num: number) =>
  num % 2 !== 0 ? num : num - 1;

const Roulette: React.FC = () => {
  const [width, setWidth] = useState<null | number>(null);
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
          : null,
      );
    };

    hanlder();
    window.addEventListener('resize', hanlder);

    return () =>
      window.removeEventListener('resize', hanlder);
  }, [window]);

  const cardMarginRight = isMobile ? 5 : 10;
  const cardWidth = isMobile ? 56 : 110;

  const count = width
    ? getOdd(
        Math.floor(width / (cardMarginRight + cardWidth)),
      )
    : null;

  const maxWidth = count
    ? (cardMarginRight + cardWidth) * count -
      cardMarginRight
    : null;

  return (
    <Wrap>
      <Delimiter />

      <ItemsWrap>
        <div ref={itemsWrapRef}>
          <ItemsOverflowWrap maxWidth={maxWidth}>
            <Items>
              {new Array(30).fill(null).map((_, i) => (
                <BuyCard key={i} roulette icon="enderman" />
              ))}
            </Items>
          </ItemsOverflowWrap>
        </div>
      </ItemsWrap>
    </Wrap>
  );
};

export default Roulette;
