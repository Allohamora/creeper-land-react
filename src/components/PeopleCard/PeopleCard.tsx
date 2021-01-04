import React from 'react';
import { ReactComponent as PeopleRounded } from 'assets/people-rounded.svg';
import { cn } from 'utils/bem';
import './PeopleCard.scss';

const peopleCard = cn('PeopleCard');

interface PeopleCardProps {
  variant?: 'green' | 'white';
  text: string;
  className?: string;
}

const PeopleCard: React.FC<PeopleCardProps> = ({
  variant = 'green',
  text,
  className,
}) => {
  return (
    <div className={peopleCard(null, [className])}>
      <PeopleRounded
        className={peopleCard('icon', { variant })}
      />
      <p className={peopleCard('text', { variant })}>
        {text}
      </p>
    </div>
  );
};

export default PeopleCard;
