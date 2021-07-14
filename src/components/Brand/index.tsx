import React from 'react';
import { Wrap, Data, Title, Ip } from './styles';
import { Link } from 'router';
import { Logo } from 'components/Logo';

export const Brand: React.FC = () => (
  <Link href="/">
    <Wrap>
      <Logo />

      <Data>
        <Title>CREEPER LAND</Title>
        <Ip>mc.creeperland.ru</Ip>
      </Data>
    </Wrap>
  </Link>
);
