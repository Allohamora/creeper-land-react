import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from 'components/ui/Logo';
import { Normal, Small } from 'components/ui/Text';
import { Left, LeftText } from './styles';

export const LeftComponent: React.FC<{}> = () => (
  <div>
    <Link to="/">
      <Left>
        <Logo />

        <LeftText>
          <Normal weight>CREEPER LAND</Normal>
          <Small primary>mc.creeperland.ru</Small>
        </LeftText>
      </Left>
    </Link>
  </div>
);
