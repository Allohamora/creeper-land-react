import React from 'react';
import {
  IconsType,
  LinksType,
  Modal as ShowType,
} from 'types/navbar';
import { ToggleModal } from 'types/props';
import UiMenu from 'components/Menu';
import Brand from '../../Brand';
import IconLinks from '../IconLinks';
import NavLinks from '../NavLinks';
import './Menu.scss';

interface ModalProps {
  show: ShowType;
  closeMenu: ToggleModal;
  links: LinksType;
  icons: IconsType;
  userState: JSX.Element;
}

const block = 'nav-menu';

const Menu: React.FC<ModalProps> = ({
  show,
  closeMenu,
  links,
  icons,
  userState,
}) => (
  <UiMenu className={block} show={show} onClose={closeMenu}>
    <div className={`${block}__top`}>
      <h2 className={`${block}__list-title`}>Меню</h2>
      <NavLinks links={links} modal />
      {userState}
    </div>

    <div className={`${block}__bottom`}>
      <Brand />
      <IconLinks icons={icons} modal />
    </div>
  </UiMenu>
);

export default Menu;
