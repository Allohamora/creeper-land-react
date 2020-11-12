import React from 'react';
import { DivProps } from 'types';
import { Discord } from 'components/ui/Icons/Discord';
import { Vk } from 'components/ui/Icons/Vk';
import { Root } from './styles';
import { LeftComponent } from './LeftComponent';
import { IconsType, LinksType, RightComponent } from './RightComponent';

interface NavbarProps extends DivProps {}

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

export const Navbar: React.FC<NavbarProps> = (props) => (
  <Root {...props}>
    <LeftComponent />
    <RightComponent links={links} icons={icons} />
  </Root>
);
