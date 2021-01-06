import React, { useState } from 'react';
import Button from 'components/Button';
import Brand from '../Brand';
import Content from './Content';
import Menu from './Menu';
import { ReactComponent as Discord } from 'assets/discord.svg';
import { ReactComponent as Vk } from 'assets/vk.svg';
import { DivProps } from 'types/props';
import { navbar, IconsType, LinksType } from './shared';
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

interface NavbarProps extends DivProps {
  footer?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  className,
  footer,
  ...rest
}) => {
  const [show, setShow] = useState(false);

  const openMenu = () => setShow(true);
  const closeMenu = () => setShow(false);

  const userState = (
    <Button className={navbar('button')}>Войти</Button>
  );

  return (
    <>
      <div
        className={navbar({ footer }, [className])}
        {...rest}
      >
        <Brand />

        <Content
          footer={footer}
          openModal={openMenu}
          links={links}
          icons={icons}
          userState={userState}
        />
      </div>

      {!footer && (
        <Menu
          show={show}
          closeMenu={closeMenu}
          links={links}
          icons={icons}
          userState={userState}
        />
      )}
    </>
  );
};

export default Navbar;
