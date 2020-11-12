import React from 'react';
import { DivProps } from 'types';
import { Root } from './styles';
import { LeftComponent } from './LeftComponent';
import { RightComponent } from './RightComponent';
import { Discord } from 'components/ui/Icons/Discord';
import { Vk } from 'components/ui/Icons/Vk';

interface NavbarProps extends DivProps {};

interface Link {
  to: string,
  text: string
};

export type Links = Link[];

interface Icon {
  href: string,
  icon: JSX.Element
};

export type Icons = Icon[];

const links: Links = [
  {
    to: '/',
    text: 'Донат'
  },
  {
    to: '/',
    text: 'Правила'
  },
  {
    to: '/',
    text: 'Контакты'
  }
];

const icons: Icons = [
  {
    href: 'https://vk.com',
    icon: <Vk />
  },
  {
    href: 'https://discord.com',
    icon: <Discord />
  }
];

export const Navbar: React.FC<NavbarProps> = (props) => {

  return (
    <Root {...props} >
      <LeftComponent />
      <RightComponent links={links} icons={icons} />
    </Root>
  );
};
