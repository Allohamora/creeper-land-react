import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { LinksType, Modal } from 'types/navbar';
import './NavLinks.scss';

interface NavLinksProps {
  links: LinksType;
  modal?: Modal;
}

const block = 'nav-links';

const NavLinks: React.FC<NavLinksProps> = ({
  links,
  modal,
}) => (
  <div className={clsx(block, modal && `${block}_modal`)}>
    {links.map(({ to, text }, i) => (
      <div key={i} className={`${block}__item`}>
        <Link to={to}>
          <p>{text}</p>
        </Link>
      </div>
    ))}
  </div>
);

export default NavLinks;
