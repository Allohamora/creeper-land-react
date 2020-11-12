import React from 'react';
import { Navbar } from 'components/Navbar';
import { Root } from './styles';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => (
  <Root>
    <Navbar />
  </Root>
);
