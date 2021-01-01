import React, { useState } from 'react';
import Tab from './Tab';
import { Content } from 'types/props';
import { tabs as tabsBem } from './shared';
import './Tabs.scss';

interface TabsProps {
  tabs: Content[];
  content: Content[];
}

const Tabs: React.FC<TabsProps> = ({ tabs, content }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const TabClickHandler = (index: number) => () => {
    setActiveIndex(index);
  };

  return (
    <div className={tabsBem()}>
      <div className={tabsBem('buttons')}>
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

      <div className={tabsBem('content-wrap')}>
        {content.map((value, i) => (
          <div
            key={i}
            className={tabsBem('content', {
              active: i === activeIndex,
            })}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
