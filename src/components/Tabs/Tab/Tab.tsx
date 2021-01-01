import React from 'react';
import { tabs } from '../shared';

interface TabProps {
  active?: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({
  children,
  onClick,
  active,
}) => {
  return (
    <button
      className={tabs('tab', { active })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Tab;
