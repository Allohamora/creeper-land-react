import React from 'react';
import Typography from 'components/Typography';
import { DivProps } from 'types/props';
import { cn } from 'utils/bem';
import { IconType, icons } from './icons';
import './styles/Card.scss';

const card = cn('Card');

interface CardProps extends DivProps {
  variant?: 'shop' | 'case';
  title: string;
  value: string;
  icon: IconType;
}

const Card: React.FC<CardProps> = ({
  className,
  variant = 'shop',
  icon,
  title,
  value,
}) => (
  <div className={card({ variant }, [className])}>
    <Typography variant="h4" className={card('title')}>
      {title}
    </Typography>
    {
      // eslint-disable-next-line jsx-a11y/alt-text
    }
    <img className={card('icon')} {...icons[icon]} />
    <Typography variant="h4" className={card('value')}>
      {value}
    </Typography>
  </div>
);

export default Card;
