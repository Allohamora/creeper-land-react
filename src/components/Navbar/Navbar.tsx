import React, { useState } from 'react';
import clsx from 'clsx';
import Discord from 'components/ui/Icons/Discord';
import Vk from 'components/ui/Icons/Vk';
import Button from 'components/ui/Button';
import { IconsType, LinksType } from 'types/navbar';
import { DivProps } from 'types/props';
import Brand from './Brand';
import Content from './Content';
import Menu from './Menu';
import './Navbar.scss';

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

const Navbar: React.FC<DivProps> = ({ className, ...rest }) => {
  const [show, setShow] = useState(false);

  const openMenu = () => setShow(true);
  const closeMenu = () => setShow(false);

  const userState = <Button>Войти</Button>;

  return (
    <>
      <div className={clsx('navbar', className)} {...rest}>
        <Brand />

        <Content
          openModal={openMenu}
          links={links}
          icons={icons}
          userState={userState}
        />
      </div>

      <Menu
        show={show}
        closeMenu={closeMenu}
        links={links}
        icons={icons}
        userState={userState}
      />
    </>
  );
};

export default Navbar;
