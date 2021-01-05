import React from 'react';
import Typography from 'components/Typography';
import descriptionPrivilege from 'mock/descriptionPrivilege.json';
import DropdownList from 'components/DropdownList';
import { description } from '../shared';

const Privilege: React.FC = () => {
  return (
    <div className={description('privilege')}>
      <Typography
        variant="h2"
        color="black"
        className={description('privilege-title')}
      >
        Описание привилегий
      </Typography>
      {descriptionPrivilege.map(({ title, items }, i) => (
        <DropdownList
          className={description('dropdown')}
          key={i}
          title={title}
          items={items}
        />
      ))}
    </div>
  );
};

export default Privilege;
