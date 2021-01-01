import React from 'react';
import Typography from 'components/Typography';
import { buy } from '../shared';

const Sale: React.FC = () => {
  return (
    <div className={buy('sale')}>
      <Typography variant="h3" color="white" weight="500">
        Статус Dragon со скидкой 20%
      </Typography>

      <Typography className={buy('price')} color="purple">
        ВСЕГО за 999 руб.
      </Typography>
    </div>
  );
};

export default Sale;
