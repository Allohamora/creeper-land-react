import React from 'react';
import clsx from 'clsx';
import Paragraph from 'components/ui/Paragraph';
import { Link } from 'react-router-dom';
import { LinksType, Modal } from 'types/navbar';
import './NavLinks.scss';

interface NavLinksProps {
  links: LinksType;
  modal?: Modal;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, modal }) => (
  <div className={clsx('nav-links', { 'nav-links_modal': modal })}>
    {links.map(({ to, text }, i) => (
      <div key={i} className="nav-links__item">
        <Link to={to}>
          <Paragraph>{text}</Paragraph>
        </Link>
      </div>
    ))}
  </div>
);

export default NavLinks;
