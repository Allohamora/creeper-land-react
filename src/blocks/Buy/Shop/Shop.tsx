import React from 'react';
import Tabs from 'components/Tabs';
import shopBlockTabsMock from 'mock/shopBlock.json';
import Title from '../Title';
import Card from 'components/Card';
import { buy } from '../shared';
import { IconType } from 'components/Card/icons';

const Shop: React.FC = () => {
  const tabsButtons = ['Привилегии', 'Кейсы', 'Разбан'];

  const tabsContent = shopBlockTabsMock.map(
    (arr, arrIndex) => (
      <div key={arrIndex} className={buy('tab')}>
        {arr.map(({ icon, ...rest }, i) => (
          <Card key={i} icon={icon as IconType} {...rest} />
        ))}
      </div>
    ),
  );

  return (
    <div>
      <Title variant="shop">Магазин</Title>

      <Tabs tabs={tabsButtons} content={tabsContent} />
    </div>
  );
};

export default Shop;
