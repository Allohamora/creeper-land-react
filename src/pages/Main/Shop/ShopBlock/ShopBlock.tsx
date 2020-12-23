import Tabs from 'components/Tabs';
import Typography from 'components/Typography';
import React from 'react';
import ShopCard, { IconType } from '../ShopCard';
import './ShopBlock.scss';

const rawTabContent: {
  top: string;
  bottom: string;
  icon: IconType;
}[][] = [
  [
    { top: 'Creeper', bottom: '123 руб.', icon: 'creeper' },
    { top: 'Ender', bottom: '123 руб.', icon: 'enderman' },
    { top: 'Blaze', bottom: '123 руб.', icon: 'blaze' },
    { top: 'Wither', bottom: '123 руб.', icon: 'wither' },
  ],
  [
    { top: 'Creeper', bottom: '123 руб.', icon: 'creeper' },
    { top: 'Ender', bottom: '123 руб.', icon: 'enderman' },
    { top: 'Blaze', bottom: '123 руб.', icon: 'blaze' },
    { top: 'Wither', bottom: '123 руб.', icon: 'wither' },
    { top: 'Creeper', bottom: '123 руб.', icon: 'creeper' },
    { top: 'Ender', bottom: '123 руб.', icon: 'enderman' },
    { top: 'Blaze', bottom: '123 руб.', icon: 'blaze' },
    { top: 'Wither', bottom: '123 руб.', icon: 'wither' },
  ],
  [
    { top: 'Creeper', bottom: '123 руб.', icon: 'creeper' },
    { top: 'Ender', bottom: '123 руб.', icon: 'enderman' },
    { top: 'Blaze', bottom: '123 руб.', icon: 'blaze' },
    { top: 'Wither', bottom: '123 руб.', icon: 'wither' },
    { top: 'Creeper', bottom: '123 руб.', icon: 'creeper' },
    { top: 'Ender', bottom: '123 руб.', icon: 'enderman' },
    { top: 'Blaze', bottom: '123 руб.', icon: 'blaze' },
    { top: 'Wither', bottom: '123 руб.', icon: 'wither' },
    { top: 'Creeper', bottom: '123 руб.', icon: 'creeper' },
    { top: 'Ender', bottom: '123 руб.', icon: 'enderman' },
    { top: 'Blaze', bottom: '123 руб.', icon: 'blaze' },
    { top: 'Wither', bottom: '123 руб.', icon: 'wither' },
  ],
];

const block = 'main-shop-block';

const ShopBlock: React.FC = () => {
  const tabsButtons = ['Привилегии', 'Кейсы', 'Разбан'];

  const tabsContent = rawTabContent.map((arr, arrIndex) => (
    <div key={arrIndex} className={`${block}__tab-content`}>
      {arr.map((props, i) => (
        <ShopCard key={i} {...props} />
      ))}
    </div>
  ));

  return (
    <div className={block}>
      <Typography
        component="h2"
        variant="h2"
        color="black"
        className={`${block}__tab-title`}
      >
        Магазин
      </Typography>
      <Tabs tabs={tabsButtons} content={tabsContent} />
    </div>
  );
};

export default ShopBlock;
