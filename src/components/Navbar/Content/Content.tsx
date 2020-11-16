import React from 'react';
import { Burger } from 'components/ui/Icons/Burger';
import { IconsType, LinksType } from 'types/navbar';
import { ToggleModal } from 'types';
import { BurgerWrap, Root, Inner } from './styles';
import { NavLinks } from '../NavLinks';
import { IconLinks } from '../IconLinks';

interface ContentProps {
  links: LinksType,
  icons: IconsType,
  openModal: ToggleModal,
  userState: JSX.Element,
}

export const Content: React.FC<ContentProps> = ({
  links, icons, openModal, userState,
}) => (
  <Root>
    <Inner>
      <NavLinks links={links} />
      <IconLinks icons={icons} />
      {userState}
    </Inner>

    <BurgerWrap>
      <button type="button" onClick={openModal}>
        <Burger />
      </button>
    </BurgerWrap>
  </Root>
);
