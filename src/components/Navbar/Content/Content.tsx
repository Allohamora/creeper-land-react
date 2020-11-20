import React from 'react';
import IconButton from 'components/ui/IconButton';
import Burger from 'components/ui/Icons/Burger';
import { IconsType, LinksType } from 'types/navbar';
import { ToggleModal } from 'types/props';
import NavLinks from '../NavLinks';
import IconLinks from '../IconLinks';
import './Content.scss';

interface ContentProps {
  links: LinksType;
  icons: IconsType;
  openModal: ToggleModal;
  userState: JSX.Element;
}

const Content: React.FC<ContentProps> = ({
  links,
  icons,
  openModal,
  userState,
}) => (
  <div className="nav-content">
    <div className="nav-content__inner">
      <NavLinks links={links} />
      <IconLinks icons={icons} />
      {userState}
    </div>

    <div className="nav-content__burger-wrap">
      <IconButton icon={<Burger />} onClick={openModal} />
    </div>
  </div>
);

export default Content;
