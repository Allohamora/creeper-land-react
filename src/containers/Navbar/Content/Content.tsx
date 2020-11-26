import React from 'react';
import IconButton from 'components/IconButton';
import Burger from 'components/Icons/Burger';
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

const block = 'nav-content';

const Content: React.FC<ContentProps> = ({
  links,
  icons,
  openModal,
  userState,
}) => (
  <div className={block}>
    <div className={`${block}__inner`}>
      <NavLinks links={links} />
      <IconLinks icons={icons} />
      {userState}
    </div>

    <div className={`${block}__burger-wrap`}>
      <IconButton icon={<Burger />} onClick={openModal} />
    </div>
  </div>
);

export default Content;
