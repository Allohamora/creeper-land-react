import React from 'react';
import { Normal } from 'components/ui/Text';
import { Link } from 'react-router-dom';
import { LinksType, Modal } from 'types/navbar';
import { Item, List } from './styles';

interface NavLinksProps {
  links: LinksType,
  modal?: Modal
}

export const NavLinks: React.FC<NavLinksProps> = ({ links, modal }) => (
  <List modal={modal}>
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
);
