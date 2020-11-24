import React from 'react';
import Typography from 'components/ui/Typography';
import clsx from 'clsx';
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
          <Typography variant="p2" color="white">
            {text}
          </Typography>
        </Link>
      </div>
    ))}
  </div>
);

export default NavLinks;
