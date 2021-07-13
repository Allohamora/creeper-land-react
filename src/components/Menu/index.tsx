import React from 'react';
import XIcon from 'assets/icons/x.svg';
import { Content, Inner, XButton, Backdrop } from './styles';

export interface ModalProps {
  onClose?: () => void;
  show: boolean;
  className?: string;
}

export const Menu: React.FC<ModalProps> = ({
  onClose,
  children,
  className,
  show,
}) => {
  document.documentElement.style.overflow = show ? 'hidden' : '';

  return (
    <div className={className}>
      <Backdrop show={show} onClick={onClose} />

      <Inner show={show}>
        <div>
          <XButton onClick={onClose}>
            <XIcon />
          </XButton>
        </div>

        <Content>{children}</Content>
      </Inner>
    </div>
  );
};
