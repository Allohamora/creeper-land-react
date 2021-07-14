import React from 'react';
import Burger from 'assets/icons/burger.svg';
import { Links } from '../Links';
import { IconLinks } from '../IconLinks';
import { IconsType, LinksType } from '../shared';
import { Hidden, BurgerButton, Nav, Wrap } from './styles';

interface ContentProps {
  links: LinksType;
  icons: IconsType;
  openModal: () => void;
  footer?: boolean;
  className?: string;
}

export const Content: React.FC<ContentProps> = ({
  links,
  icons,
  openModal,
  footer,
  className,
}) => (
  <Wrap className={className}>
    <Nav>
      <Links links={links} />
      <IconLinks icons={icons} />
    </Nav>

    <Hidden>
      {footer ? (
        <IconLinks modal icons={icons} />
      ) : (
        <BurgerButton onClick={openModal}>
          <Burger />
        </BurgerButton>
      )}
    </Hidden>
  </Wrap>
);
