import React from 'react';
import { Normal } from 'components/ui/Text';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button';
import {
  Icons, Item, List, Right,
} from './styles';

interface LinkType {
  to: string,
  text: string
}

export type LinksType = LinkType[];

interface IconType {
  href: string,
  icon: JSX.Element
}

export type IconsType = IconType[];

interface RightComponentProps {
  links: LinksType,
  icons: IconsType
}

export const RightComponent: React.FC<RightComponentProps> = ({ links, icons }) => (
  <Right>
    <List>
      {
        links.map(({ to, text }, i) => (
          <Item key={i}>
            <Link to={to}>
              <Normal>{text}</Normal>
            </Link>
          </Item>
        ))
      }
    </List>

    <Icons>
      {
        icons.map(({ href, icon }, i) => (
          <a
            key={i}
            href={href}
          >
            {icon}
          </a>
        ))
      }
    </Icons>

    <Button>Войти</Button>
  </Right>
);
