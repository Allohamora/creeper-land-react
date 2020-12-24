import React from 'react';
import Typography from 'components/Typography';
import { MAIN_SHOP_IMG_PATH } from 'styles/vars';
import './TabCard.scss';

export const icons = {
  creeper: {
    src: `${MAIN_SHOP_IMG_PATH}/creeper.png`,
    alt: 'creeper icon',
  },
  enderman: {
    src: `${MAIN_SHOP_IMG_PATH}/enderman.png`,
    alt: 'enderman icon',
  },
  blaze: {
    src: `${MAIN_SHOP_IMG_PATH}/blaze.png`,
    alt: 'blaze icon',
  },
  wither: {
    src: `${MAIN_SHOP_IMG_PATH}/wither.png`,
    alt: 'wither',
  },
};

export type IconType = keyof typeof icons;

interface TabCardProps {
  top: string;
  bottom: string;
  icon: IconType;
}

const block = 'main-shop-tab-card';

const TabCard: React.FC<TabCardProps> = ({
  top,
  bottom,
  icon,
}) => {
  return (
    <div className={block}>
      <Typography
        variant="h4"
        className={`${block}__top`}
        color="inherit"
      >
        {top}
      </Typography>

      {
        // eslint-disable-next-line
      }<img className={`${block}__icon`} {...icons[icon]} />

      <Typography
        variant="h4"
        className={`${block}__bottom`}
        color="inherit"
      >
        {bottom}
      </Typography>
    </div>
  );
};

export default TabCard;
