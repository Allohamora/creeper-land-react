import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from 'components/ui/Logo';
import { Normal, Small } from 'components/ui/Text';
import { Container, Text } from './styles';

interface BrandProps {}

export const Brand: React.FC<BrandProps> = () => (
  <Link to="/">
    <Container>
      <Logo />

      <Text>
        <Normal weight>CREEPER LAND</Normal>
        <Small primary>mc.creeperland.ru</Small>
      </Text>
    </Container>
  </Link>
);
