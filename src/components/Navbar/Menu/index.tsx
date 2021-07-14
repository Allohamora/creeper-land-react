import React from 'react';
import { Brand } from 'components/Brand';
import { IconLinks } from '../IconLinks';
import { Links } from '../Links';
import { IconsType, LinksType, Modal as ShowType } from '../shared';
import { Menu as StyledMenu, ListTitle, Top, Bottom } from './styles';

interface MenuProps {
  show: ShowType;
  closeMenu: () => void;
  links: LinksType;
  icons: IconsType;
}

export const Menu: React.FC<MenuProps> = ({
  show,
  closeMenu,
  links,
  icons,
}) => (
  <StyledMenu show={show} onClose={closeMenu}>
    <Top>
      <ListTitle>Меню</ListTitle>
      <Links links={links} modal />
    </Top>

    <Bottom>
      <Brand />
      <IconLinks icons={icons} modal />
    </Bottom>
  </StyledMenu>
);
