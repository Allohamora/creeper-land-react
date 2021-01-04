import React from 'react';
import { icons, IconType } from 'components/Card/icons';
import { latestBuys } from '../shared';

interface CardProps {
  icon: IconType;
}

const Card: React.FC<CardProps> = ({ icon }) => {
  return (
    <div className={latestBuys('card')}>
      {
        // eslint-disable-next-line
      }<img className={latestBuys('card-icon')} {...icons[icon]} />
    </div>
  );
};

export default Card;
