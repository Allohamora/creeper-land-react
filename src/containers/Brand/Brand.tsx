import React from 'react';
import Logo from 'components/Logo';
import Typography from 'components/Typography';
import { Link } from 'react-router-dom';
import './Brand.scss';

const block = 'brand';

const Brand: React.FC = () => (
  <Link to="/">
    <div className={block}>
      <Logo />

      <div className={`${block}__text`}>
        <Typography
          className={`${block}__title`}
          variant="p2"
          weight="500"
          color="white"
        >
          CREEPER LAND
        </Typography>
        <Typography
          className={`${block}__ip`}
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
