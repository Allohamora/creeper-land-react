import clsx from 'clsx';
import React from 'react';
import { IconsType, Modal } from 'types/navbar';
import './IconLinks.scss';

interface IconLinksProps {
  icons: IconsType;
  modal?: Modal;
  className?: string;
}

const block = 'icon-links';

const IconLinks: React.FC<IconLinksProps> = ({
  icons,
  modal,
  className,
}) => (
  <div
    className={clsx(
      block,
      modal && `${block}_modal`,
      className,
    )}
  >
    {icons.map(({ href, icon }, i) => (
      <a key={i} href={href}>
        {icon}
      </a>
    ))}
  </div>
);

export default IconLinks;
