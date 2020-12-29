import React from 'react';
import { Link } from 'react-router-dom';
import { navbar, LinksType, Modal } from '../shared';

interface NavLinksProps {
  links: LinksType;
  modal?: Modal;
}

const NavLinks: React.FC<NavLinksProps> = ({
  links,
  modal,
}) => (
  <div className={navbar('links', { modal })}>
    {links.map(({ to, text }, i) => (
      <div key={i} className={navbar('link')}>
        <Link to={to}>
          <p className={navbar('link-text')}>{text}</p>
        </Link>
      </div>
    ))}
  </div>
);

export default NavLinks;
