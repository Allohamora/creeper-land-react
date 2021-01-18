import React from 'react';
import Tabs from 'components/Tabs';
import shopBlockTabsMock from 'mock/shopBlock.json';
import Title from '../Title';
import Card from 'components/Card';
import { IconType } from 'components/Card/icons';
import { Tab } from './styles';

const Shop: React.FC = () => {
  const tabsButtons = ['Привилегии', 'Кейсы', 'Разбан'];

  const tabsContent = shopBlockTabsMock.map(
    (arr, arrIndex) => (
      <Tab key={arrIndex}>
        {arr.map(({ icon, ...rest }, i) => (
          <Card key={i} icon={icon as IconType} {...rest} />
        ))}
      </Tab>
    ),
  );

  return (
    <div>
      <Title type="shop">Магазин</Title>

      <Tabs tabs={tabsButtons} content={tabsContent} />
    </div>
  );
};

export default Shop;
