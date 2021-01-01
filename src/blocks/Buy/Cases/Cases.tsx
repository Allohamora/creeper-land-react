import React from 'react';
import Title from '../Title';
import shopCasesMock from 'mock/shopCases.json';
import Card from 'components/Card';
import { buy } from '../shared';
import { IconType } from 'components/Card/icons';

const Cases: React.FC = () => {
  return (
    <div className={buy('cases-wrap')}>
      <Title variant="case">Кейсы</Title>

      <div className={buy('cases')}>
        {shopCasesMock.map(({ icon, ...rest }, i) => (
          <Card
            variant="case"
            key={i}
            icon={icon as IconType}
            {...rest}
          />
        ))}
      </div>
    </div>
  );
};

export default Cases;
