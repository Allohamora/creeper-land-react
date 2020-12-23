import React, { useState } from 'react';
import { Content } from 'types/props';
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
        {content[activeIndex]}
      </div>
    </div>
  );
};

export default Tabs;
