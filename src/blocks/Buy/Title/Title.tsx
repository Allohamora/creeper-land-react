import React from 'react';
import Typography from 'components/Typography';
import { buy } from '../shared';

interface TitleProps {
  variant?: 'case' | 'shop';
}

const Title: React.FC<TitleProps> = ({
  variant = 'case',
  children,
}) => (
  <Typography
    variant="h2"
    color="black"
    className={buy('title', { variant })}
  >
    {children}
  </Typography>
);

export default Title;
