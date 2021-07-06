import React from 'react';
import Links from '../Links';
import Icons from '../Icons';
import { ToggleModal } from 'types/props';
import { ReactComponent as Burger } from 'assets/svg/burger.svg';
import { IconsType, LinksType } from '../shared';
import { Hidden, BurgerButton, Nav, Wrap } from './styles';

interface ContentProps {
  links: LinksType;
  icons: IconsType;
  openModal: ToggleModal;
  footer?: boolean;
  className?: string;
}

const Content: React.FC<ContentProps> = ({
  links,
  icons,
  openModal,
  footer,
  className,
}) => (
  <Wrap className={className}>
    <Nav>
      <Links links={links} />
      <Icons icons={icons} />
    </Nav>

    <Hidden>
      {footer ? (
        <Icons modal icons={icons} />
      ) : (
        <BurgerButton onClick={openModal}>
          <Burger />
        </BurgerButton>
      )}
    </Hidden>
  </Wrap>
);

export default Content;
