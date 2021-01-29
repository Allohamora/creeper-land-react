import { Sizes, Status } from '../shared';
import { Animate } from '../Roulette/styles';

const oddCount = (num: number) =>
  num % 2 !== 0 ? num : num - 1;

const transformCount = (
  width: number,
  cardWidth: number,
) => {
  const raw = oddCount(Math.floor(width / cardWidth));

  return raw < 0 ? 1 : raw;
};

export const getCount = (sizes: Sizes): number => {
  const available =
    window.innerWidth -
    sizes.roulette.containerHorizontalPadding * 2;

  const scrollSize = 15;

  const baseCount = transformCount(
    available,
    sizes.roulette.cardFullWidth,
  );
  const scrollCount = transformCount(
    available - scrollSize,
    sizes.roulette.cardFullWidth,
  );

  return Math.min(baseCount, scrollCount);
};

export const getMaxWidth = (
  count: number,
  sizes: Sizes,
): number => {
  const {
    roulette: { cardFullWidth, cardMarginRight },
  } = sizes;

  return count * cardFullWidth - cardMarginRight;
};

export const getAnimate = (
  sizes: Sizes,
  count: number,
  modifier: number,
  status: Status,
): Animate => {
  if (status === 'start' || status === 'started') {
    const card = sizes.roulette.cardFullWidth;
    const line = card * count;

    const marginLeft = -(line * modifier - card);

    return {
      marginLeft,
      transition: `${modifier}s`,
    };
  }

  return null;
};
