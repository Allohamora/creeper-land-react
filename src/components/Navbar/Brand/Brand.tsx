import React from 'react';
import Logo from 'components/Logo';
import Typography from 'components/ui/Typography';
import { Link } from 'react-router-dom';
import './Brand.scss';

const Brand: React.FC = () => (
  <Link to="/">
    <div className="brand">
      <Logo />

      <div className="brand__text">
        <Typography variant="p2" weight="500" color="white">
          CREEPER LAND
        </Typography>
        <Typography variant="p3" color="lime">
          mc.creeperland.ru
        </Typography>
      </div>
    </div>
  </Link>
);

export default Brand;
