import React from 'react';
import { IconsType, LinksType, Modal as ShowType } from 'types/navbar';
import { Brand } from '../Brand';
import { IconLinks } from '../IconLinks';
import { NavLinks } from '../NavLinks';
import {
  Modal as ModalComponent, ListTitle, Top, Bottom,
} from './styles';

interface ModalProps {
  show: ShowType,
  closeModal: () => void,
  links: LinksType,
  icons: IconsType,
  userState: JSX.Element,
}

export const Modal: React.FC<ModalProps> = ({
  show, closeModal, links, icons, userState,
}) => (
  <ModalComponent show={show} onClose={closeModal}>
    <Top>
      <ListTitle>Меню</ListTitle>
      <NavLinks links={links} modal />
      {userState}
    </Top>

    <Bottom>
      <Brand />
      <IconLinks icons={icons} modal />
    </Bottom>
  </ModalComponent>
);
