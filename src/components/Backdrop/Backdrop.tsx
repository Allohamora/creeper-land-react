import styled from 'styled-components';
import { color, opacity, zIndex } from 'styles/helpers';
import { Show } from 'types/modal';

export const Backdrop = styled.div<Show>`
  position: fixed;
  top: 0;
  left: 100%;
  z-index: ${zIndex('backdrop')};

  width: 100%;
  height: 100%;

  background-color: ${color('black')};
  opacity: ${opacity('secondary')};

  ${(p) => p.show && 'left: 0;'}
`;

export default Backdrop;
