import React from 'react';
import IconButton from 'components/IconButton';
import Backdrop from '../Backdrop';
import { cn } from 'utils/bem';
import { ReactComponent as XIcon } from 'assets/x.svg';
import './Menu.scss';

export interface ModalProps {
  onClose?: () => void;
  show: boolean;
  className?: string;
}

const menu = cn('Menu');

const Menu: React.FC<ModalProps> = ({
  onClose,
  children,
  show,
  className,
}) => {
  document.documentElement.style.overflow = show
    ? 'hidden'
    : '';

  return (
    <div className={menu()}>
      <Backdrop show={show} onClick={onClose} />

      <div className={menu('inner', { show })}>
        <div>
          <IconButton
            className={menu('x')}
            onClick={onClose}
            icon={<XIcon />}
          />
        </div>

        <div className={menu('content', [className])}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Menu;
