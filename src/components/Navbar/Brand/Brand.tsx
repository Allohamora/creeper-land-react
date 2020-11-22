import React from 'react';
import Logo from 'components/Logo';
import Paragraph from 'components/ui/Paragraph';
import { Link } from 'react-router-dom';
import './Brand.scss';

const Brand: React.FC = () => (
  <Link to="/">
    <div className="brand">
      <Logo />

      <div className="brand__text">
        <Paragraph weight>CREEPER LAND</Paragraph>
        <Paragraph small primary>
          mc.creeperland.ru
        </Paragraph>
      </div>
    </div>
  </Link>
);

export default Brand;
