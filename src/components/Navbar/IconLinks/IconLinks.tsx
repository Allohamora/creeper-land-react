import React from 'react';
import { IconsType, Modal } from 'types/navbar';
import { Icons } from './styles';

interface IconLinksProps {
  icons: IconsType,
  modal?: Modal
}

export const IconLinks: React.FC<IconLinksProps> = ({ icons, modal }) => (
  <Icons modal={modal}>
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
);
