import React from 'react';
import clsx from 'clsx';
import './Tab.scss';

interface TabProps {
  active?: boolean;
  onClick: () => void;
}

const block = 'tab';

const Tab: React.FC<TabProps> = ({
  children,
  onClick,
  active,
}) => {
  return (
    <button
      className={clsx(block, active && `${block}_active`)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Tab;
