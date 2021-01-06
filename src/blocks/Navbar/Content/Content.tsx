import React from 'react';
import IconButton from 'components/IconButton';
import Links from '../Links';
import Icons from '../Icons';
import { ToggleModal } from 'types/props';
import { ReactComponent as Burger } from 'assets/burger.svg';
import { navbar, IconsType, LinksType } from '../shared';

interface ContentProps {
  links: LinksType;
  icons: IconsType;
  openModal: ToggleModal;
  userState: JSX.Element;
  footer?: boolean;
}

const Content: React.FC<ContentProps> = ({
  links,
  icons,
  openModal,
  userState,
  footer,
}) => (
  <div className={navbar('content')}>
    <nav className={navbar('nav')}>
      <Links links={links} />
      <Icons icons={icons} />
      {userState}
    </nav>

    <div className={navbar('hidden')}>
      {footer ? (
        <Icons modal icons={icons} />
      ) : (
        <IconButton
          className={navbar('burger')}
          icon={<Burger />}
          onClick={openModal}
        />
      )}
    </div>
  </div>
);

export default Content;
