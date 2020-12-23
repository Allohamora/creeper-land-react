import Typography from 'components/Typography';
import React from 'react';
import './Promo.scss';

const block = 'main-shop-promo';

const Promo: React.FC = () => {
  return (
    <div className={block}>
      <Typography variant="h3" color="white" weight="500">
        Статус Dragon со скидкой 20%
      </Typography>

      <Typography
        className={`${block}__bottom`}
        color="purple"
      >
        ВСЕГО за 999 руб.
      </Typography>
    </div>
  );
};

export default Promo;
