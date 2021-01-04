import React from 'react';
import Typography from 'components/Typography';
import { ReactComponent as Gamepad } from 'assets/gamepad.svg';
import { ReactComponent as People } from 'assets/people.svg';
import { ReactComponent as King } from 'assets/king.svg';
import { ReactComponent as Server } from 'assets/server.svg';
import { about } from '../shared';

const icons = {
  gamepad: Gamepad,
  people: People,
  king: King,
  server: Server,
};

export type IconType = keyof typeof icons;

interface CardProps {
  title: string;
  icon: IconType;
}

const Card: React.FC<CardProps> = ({ title, icon }) => {
  const Icon = icons[icon];

  return (
    <div className={about('card')}>
      <Icon className={about('card-icon')} />
      <Typography
        className={about('card-title')}
        variant="h4"
        weight="500"
        color="white"
      >
        {title}
      </Typography>
    </div>
  );
};

export default Card;
