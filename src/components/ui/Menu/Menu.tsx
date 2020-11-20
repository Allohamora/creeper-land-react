import clsx from 'clsx';
import IconButton from 'components/ui/IconButton';
import React from 'react';
import XIcon from '../Icons/XIcon';
import { Backdrop } from '../Modal';
import './Menu.scss';

interface ModalProps {
  onClose?: () => void;
  show: boolean;
  className?: string;
}

const Menu: React.FC<ModalProps> = ({
  onClose,
  children,
  show,
  className,
}) => {
  document.documentElement.style.overflow = show ? 'hidden' : '';

  return (
    <div>
      <Backdrop show={show} onClick={onClose} />

      <div
        className={clsx('menu__inner', { menu__inner_show: show })}
      >
        <div>
          <IconButton
            className="menu__x"
            onClick={onClose}
            icon={<XIcon />}
          />
        </div>

        <div className={clsx('menu__content', className)}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Menu;
