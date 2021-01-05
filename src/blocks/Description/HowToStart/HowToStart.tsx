import React from 'react';
import Typography from 'components/Typography';
import descriptionPoints from 'mock/descrtipionPoints.json';
import { description } from '../shared';
import { mapIndexToTitleNumber } from 'components/DropdownList/shared';

const HowToStart: React.FC = () => {
  return (
    <div>
      <Typography variant="h2" color="black">
        Как начать играть?
      </Typography>

      <div className={description('points')}>
        {descriptionPoints.map(({ title, text }, i) => (
          <div key={i} className={description('point')}>
            <Typography
              variant="h3"
              color="black"
              className={description('point-title')}
            >
              {`${mapIndexToTitleNumber(i)}. `}
              {title}
            </Typography>
            <Typography variant="p2" color="black">
              {text}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToStart;
