import React from 'react';
import clsx from 'clsx';
import Container from 'components/Container';
import './Header.scss';

interface HeaderProps {
  lines?: boolean;
}

const Header: React.FC<HeaderProps> = ({ children, lines }) => (
  <header className={clsx('header', { header_lines: lines })}>
    <Container>{children}</Container>
  </header>
);

export default Header;
