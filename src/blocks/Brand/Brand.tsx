import React from 'react';
import Logo from 'components/Logo';
import Typography from 'components/Typography';
import { Link } from 'react-router-dom';
import { cn } from 'utils/bem';
import './Brand.scss';

const brand = cn('Brand');

const Brand: React.FC = () => (
  <Link to="/">
    <div className={brand()}>
      <Logo />

      <div className={brand('data')}>
        <Typography
          className={brand('title')}
          variant="p2"
          weight="500"
          color="white"
        >
          CREEPER LAND
        </Typography>
        <Typography
          className={brand('ip')}
          variant="p3"
          color="lime"
        >
          mc.creeperland.ru
        </Typography>
      </div>
    </div>
  </Link>
);

export default Brand;
