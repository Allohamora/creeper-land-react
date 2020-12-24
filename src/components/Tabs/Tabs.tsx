import React, { useState } from 'react';
import { Content } from 'types/props';
import clsx from 'clsx';
import Tab from './Tab';
import './Tabs.scss';

interface TabsProps {
  tabs: Content[];
  content: Content[];
}

const block = 'tabs';

const Tabs: React.FC<TabsProps> = ({ tabs, content }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const TabClickHandler = (index: number) => () => {
    setActiveIndex(index);
  };

  return (
    <div className={block}>
      <div className={`${block}__buttons`}>
        {tabs.map((title, i) => (
          <Tab
            key={i}
            onClick={TabClickHandler(i)}
            active={i === activeIndex}
          >
            {title}
          </Tab>
        ))}
      </div>

      <div className={`${block}__content`}>
        {content.map((value, i) => (
          <div
            key={i}
            className={clsx(
              `${block}__content-item`,
              i === activeIndex &&
                `${block}__content-item_active`,
            )}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
