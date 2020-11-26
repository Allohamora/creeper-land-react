import React from 'react';
import clsx from 'clsx';
import Container, {
  ContainerProps,
} from 'components/Container';
import './Header.scss';

interface HeaderProps {
  lines?: boolean;
  className?: string;
  containerProps?: ContainerProps;
}

const block = 'header';

const Header: React.FC<HeaderProps> = ({
  children,
  lines,
  className,
  containerProps = {},
}) => (
  <header
    className={clsx(
      block,
      lines && `${block}_lines`,
      className,
    )}
  >
    <Container {...containerProps}>{children}</Container>
  </header>
);

export default Header;
