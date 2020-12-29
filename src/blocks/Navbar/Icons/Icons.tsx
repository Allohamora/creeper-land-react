import React from 'react';
import { navbar, IconsType, Modal } from '../shared';

interface IconLinksProps {
  icons: IconsType;
  modal?: Modal;
  className?: string;
}

const IconLinks: React.FC<IconLinksProps> = ({
  icons,
  modal,
  className,
}) => (
  <div className={navbar('icons', { modal }, [className])}>
    {icons.map(({ href, icon }, i) => (
      <a key={i} href={href} className={navbar('icon')}>
        {icon}
      </a>
    ))}
  </div>
);

export default IconLinks;
