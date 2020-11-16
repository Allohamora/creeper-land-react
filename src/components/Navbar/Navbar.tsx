import React, { useState } from 'react';
import { DivProps } from 'types';
import { Discord } from 'components/ui/Icons/Discord';
import { Vk } from 'components/ui/Icons/Vk';
import { IconsType, LinksType } from 'types/navbar';
import { Button } from 'components/Button';
import { Root } from './styles';
import { Content } from './Content';
import { Brand } from './Brand';
import { Modal } from './Modal';

type NavbarProps = DivProps;

const links: LinksType = [
  {
    to: '/',
    text: 'Донат',
  },
  {
    to: '/',
    text: 'Правила',
  },
  {
    to: '/',
    text: 'Контакты',
  },
];

const icons: IconsType = [
  {
    href: 'https://vk.com',
    icon: <Vk />,
  },
  {
    href: 'https://discord.com',
    icon: <Discord />,
  },
];

export const Navbar: React.FC<NavbarProps> = (props) => {
  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  const userState = <Button>Войти</Button>;

  return (
    <>
      <Root {...props}>
        <Brand />

        <Content
          openModal={openModal}
          links={links}
          icons={icons}
          userState={userState}
        />
      </Root>

      <Modal
        show={show}
        closeModal={closeModal}
        links={links}
        icons={icons}
        userState={userState}
      />
    </>
  );
};
