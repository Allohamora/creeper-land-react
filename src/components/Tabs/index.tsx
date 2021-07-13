import React, { useState, ReactNode } from 'react';
import { TabsWrap, Tab, Content, ContentWrap } from './styles';

interface TabsProps {
  tabs: ReactNode[];
  content: ReactNode[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs, content }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const TabClickHandler = (index: number) => () => {
    setActiveIndex(index);
  };

  return (
    <div>
      <TabsWrap>
        {tabs.map((title, i) => (
          <Tab
            key={i}
            onClick={TabClickHandler(i)}
            active={i === activeIndex}
          >
            {title}
          </Tab>
        ))}
      </TabsWrap>

      <ContentWrap>
        {content.map((value, i) => (
          <Content key={i} active={i === activeIndex}>
            {value}
          </Content>
        ))}
      </ContentWrap>
    </div>
  );
};
