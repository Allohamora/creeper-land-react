import React from 'react';
import { XIcon } from '../Icons/XIcon';
import {
  Backdrop, CloseButton, Content, Inner,
} from './styles';

interface ModalProps {
  onClose?: () => void,
  show: boolean,
  className?: string
}

export const Modal: React.FC<ModalProps> = ({
  onClose, children, show, className,
}) => {
  document.documentElement.style.overflow = show ? 'hidden' : '';

  return (
    <div>
      <Backdrop show={show} onClick={onClose} />

      <Inner show={show}>
        <div>
          <CloseButton onClick={onClose}>
            <XIcon />
          </CloseButton>
        </div>

        <Content className={className}>
          {children}
        </Content>
      </Inner>
    </div>
  );
};
