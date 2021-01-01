import { CARD_IMG_PATH } from 'styles/vars';

const getCaseIcon = (num: number) => ({
  src: `${CARD_IMG_PATH}/case${num}.png`,
  alt: 'case icon',
});

const caseIcons = {
  case_1: getCaseIcon(1),
  case_2: getCaseIcon(2),
  case_3: getCaseIcon(3),
  case_4: getCaseIcon(4),
};

const getShopIcon = (name: string) => ({
  src: `${CARD_IMG_PATH}/${name}.png`,
  alt: `${name} icon`,
});

const shopIcons = {
  creeper: getShopIcon('creeper'),
  enderman: getShopIcon('enderman'),
  blaze: getShopIcon('blaze'),
  wither: getShopIcon('wither'),
};

export const icons = {
  ...caseIcons,
  ...shopIcons,
};

export type IconType = keyof typeof icons;
