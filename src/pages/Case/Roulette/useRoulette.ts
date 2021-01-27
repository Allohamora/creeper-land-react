import React, {
  useState,
  useContext,
  useEffect,
} from 'react';
import { useMedia } from 'react-use';
import { ThemeContext } from 'styled-components';
import { Status } from '../shared';
import { Animate } from './styles';

const getCount = (num: number) =>
  num % 2 !== 0 ? num : num - 1;

export const useRoulette = (
  ref: React.MutableRefObject<null | HTMLDivElement>,
  status: Status,
  LINE_COUNT_MODIFIER: number,
) => {
  /** size */
  const windowWidth = window.innerWidth;

  const [width, setWidth] = useState<number>(windowWidth);

  const theme = useContext(ThemeContext);
  const isMobile = useMedia(
    `(max-width: ${theme.breakpoints.mobile})`,
  );

  useEffect(() => {
    const hanlder = () => {
      setWidth(
        ref.current ? ref.current.clientWidth : windowWidth,
      );
    };

    hanlder();
    window.addEventListener('resize', hanlder);

    return () =>
      window.removeEventListener('resize', hanlder);
  }, [window]);

  const CARD_MARGIN_RIGHT = isMobile ? 5 : 10;
  const CARD_WIDTH = isMobile ? 56 : 110;
  const CARD = CARD_WIDTH + CARD_MARGIN_RIGHT;

  const rawCount = getCount(Math.floor(width / CARD));

  const count = rawCount < 0 ? 1 : rawCount;

  const maxWidth = CARD * count - CARD_MARGIN_RIGHT;

  /** margin animate */
  const [animate, setAnimate] = useState<Animate>(null);

  useEffect(() => {
    if (status === 'start' || status === 'started') {
      const line = CARD * count;
      const marginLeft = -(
        line * LINE_COUNT_MODIFIER -
        CARD
      );

      return setAnimate({
        marginLeft,
        transition: `${LINE_COUNT_MODIFIER}s`,
      });
    }

    return setAnimate(null);
  }, [status]);

  return {
    maxWidth,
    count,
    animate,
    CARD_MARGIN_RIGHT,
    CARD_WIDTH,
    CARD,
  };
};
