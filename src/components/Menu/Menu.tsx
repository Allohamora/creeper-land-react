import clsx from 'clsx';
import IconButton from 'components/IconButton';
import React from 'react';
import XIcon from '../Icons/XIcon';
import { Backdrop } from '../Modal';
import './Menu.scss';

export interface ModalProps {
  onClose?: () => void;
  show: boolean;
  className?: string;
}

const block = 'menu';

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
    <div>
      <Backdrop show={show} onClick={onClose} />

      <div
        className={clsx(
          `${block}__inner`,
          show && `${block}__inner_show`,
        )}
      >
        <div>
          <IconButton
            className={`${block}__x`}
            onClick={onClose}
            icon={<XIcon />}
          />
        </div>

        <div
          className={clsx(`${block}__content`, className)}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Menu;
