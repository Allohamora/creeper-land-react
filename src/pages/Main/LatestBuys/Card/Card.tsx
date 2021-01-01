import React from 'react';
import { icons, IconType } from 'components/Card/icons';
import './Card.scss';

interface CardProps {
  icon: IconType;
}

const block = 'main-latest-buys-card';

const Card: React.FC<CardProps> = ({ icon }) => {
  return (
    <div className={block}>
      {
        // eslint-disable-next-line
      }<img className={`${block}__icon`} {...icons[icon]} />
    </div>
  );
};

export default Card;
