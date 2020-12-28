import React from 'react';
import { ToggleModal } from 'types/props';
import UiMenu from 'components/Menu';
import Brand from '../Brand';
import IconLinks from './Icons';
import NavLinks from './Links';
import {
  navbar,
  IconsType,
  LinksType,
  Modal as ShowType,
} from './shared';

interface ModalProps {
  show: ShowType;
  closeMenu: ToggleModal;
  links: LinksType;
  icons: IconsType;
  userState: JSX.Element;
}

const Menu: React.FC<ModalProps> = ({
  show,
  closeMenu,
  links,
  icons,
  userState,
}) => (
  <UiMenu
    className={navbar('menu')}
    show={show}
    onClose={closeMenu}
  >
    <div className={navbar('menu-top')}>
      <h2 className={navbar('list-title')}>Меню</h2>
      <NavLinks links={links} modal />
      {userState}
    </div>

    <div className={navbar('menu-bottom')}>
      <Brand />
      <IconLinks icons={icons} modal />
    </div>
  </UiMenu>
);

export default Menu;
