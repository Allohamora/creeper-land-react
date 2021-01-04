import React from 'react';
import { cn } from 'utils/bem';
import './Chart.scss';

const chart = cn('Chart');

const Chart: React.FC = () => {
  return <div className={chart()} />;
};

export default Chart;
