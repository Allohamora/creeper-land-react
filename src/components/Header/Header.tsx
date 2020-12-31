import React from 'react';
import Navbar from 'blocks/Navbar';
import Content from './Content';
import Container, {
  ContainerProps,
} from 'components/Container';
import { header } from './shared';
import './Header.scss';

interface HeaderProps {
  lines?: boolean;
  content?: boolean;
  className?: string;
  containerProps?: ContainerProps;
}

const Header: React.FC<HeaderProps> = ({
  children,
  lines,
  content,
  className,
  containerProps = {},
}) => (
  <header className={header({ lines }, [className])}>
    <Container
      className={header('container', [
        containerProps.className,
      ])}
      {...containerProps}
    >
      <Navbar />

      {content && <Content />}

      {children}
    </Container>
  </header>
);

export default Header;
