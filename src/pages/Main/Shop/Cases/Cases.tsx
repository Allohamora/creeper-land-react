import Typography from 'components/Typography';
import React from 'react';
import Case from './Case';
import { IconType } from './Case/Case';
import './Cases.scss';

const rawCases: {
  top: string;
  bottom: string;
  icon: IconType;
}[] = [
  {
    top: 'Кейс #1',
    bottom: '123 руб.',
    icon: '1',
  },
  {
    top: 'Кейс #2',
    bottom: '123 руб.',
    icon: '2',
  },
  {
    top: 'Кейс #3',
    bottom: '123 руб.',
    icon: '3',
  },
  {
    top: 'Кейс #4',
    bottom: '123 руб.',
    icon: '4',
  },
  {
    top: 'Кейс #1',
    bottom: '123 руб.',
    icon: '1',
  },
  {
    top: 'Кейс #2',
    bottom: '123 руб.',
    icon: '2',
  },
  {
    top: 'Кейс #3',
    bottom: '123 руб.',
    icon: '3',
  },
  {
    top: 'Кейс #4',
    bottom: '123 руб.',
    icon: '4',
  },
];

const block = 'main-shop-cases';

const Cases: React.FC = () => {
  return (
    <div className={block}>
      <Typography
        variant="h2"
        color="black"
        className={`${block}__title`}
      >
        Кейсы
      </Typography>

      <div className={`${block}__items`}>
        {rawCases.map((props, i) => (
          <Case key={i} {...props} />
        ))}
      </div>
    </div>
  );
};

export default Cases;
