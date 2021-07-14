import React from 'react';
import { Link } from 'router';
import { LinksType, Modal } from '../shared';
import { Wrap, LinkWrap, LinkText } from './styles';

interface LinksProps {
  links: LinksType;
  modal?: Modal;
}

export const Links: React.FC<LinksProps> = ({ links, modal }) => (
  <Wrap modal={modal}>
    {links.map(({ to, text }, i) => (
      <LinkWrap key={i}>
        <Link href={to}>
          <LinkText>{text}</LinkText>
        </Link>
      </LinkWrap>
    ))}
  </Wrap>
);
