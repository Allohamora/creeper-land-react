import Tabs from 'components/Tabs';
import Typography from 'components/Typography';
import React from 'react';
import shopBlockTabsMock from 'mock/shopBlock.json';
import TabCard, { IconType } from './TabCard';
import './ShopBlock.scss';

const block = 'main-shop-block';

const ShopBlock: React.FC = () => {
  const tabsButtons = ['Привилегии', 'Кейсы', 'Разбан'];

  const tabsContent = shopBlockTabsMock.map(
    (arr, arrIndex) => (
      <div
        key={arrIndex}
        className={`${block}__tab-content`}
      >
        {arr.map(({ icon, ...rest }, i) => (
          <TabCard
            key={i}
            icon={icon as IconType}
            {...rest}
          />
        ))}
      </div>
    ),
  );

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
