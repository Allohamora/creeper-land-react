import React from 'react';
import Typography from 'components/Typography';
import { MAIN_SHOP_IMG_PATH } from 'styles/vars';
import './Case.scss';

const getIcon = (num: number) => ({
  src: `${MAIN_SHOP_IMG_PATH}/case${num}.png`,
  alt: 'case icon',
});

const icons = {
  '1': getIcon(1),
  '2': getIcon(2),
  '3': getIcon(3),
  '4': getIcon(4),
};

export type IconType = keyof typeof icons;

interface CaseProps {
  top: string;
  bottom: string;
  icon: IconType;
}

const block = 'main-shop-cases-case';

const Case: React.FC<CaseProps> = ({
  top,
  bottom,
  icon,
}) => {
  return (
    <div className={block}>
      <Typography
        color="black"
        weight="500"
        variant="p2"
        className={`${block}__top`}
      >
        {top}
      </Typography>

      {
        // eslint-disable-next-line
      }<img className={`${block}__icon`} {...icons[icon]} />

      <Typography
        color="black"
        weight="500"
        variant="p2"
        className={`${block}__bottom`}
      >
        {bottom}
      </Typography>
    </div>
  );
};

export default Case;
