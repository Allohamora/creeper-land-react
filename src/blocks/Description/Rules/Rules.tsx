import React from 'react';
import DropdownList from 'components/DropdownList';
import Typography from 'components/Typography';
import descriptionRulest from 'mock/descriptionRules.json';
import { description } from '../shared';

const Rules: React.FC = () => {
  return (
    <div className={description('rules')}>
      <Typography
        variant="h2"
        color="black"
        className={description('rules-title')}
      >
        Правила
      </Typography>

      {descriptionRulest.map(({ title, items }, i) => (
        <DropdownList
          key={i}
          beforeTitleIndex={i}
          title={title}
          items={items}
          className={description('dropdown')}
        />
      ))}
    </div>
  );
};

export default Rules;
