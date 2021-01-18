import styled from 'styled-components';
import { Show } from 'types/modal';

export const Backdrop = styled.div<Show>`
  position: fixed;
  top: 0;
  left: 100%;
  z-index: 9;

  width: 100%;
  height: 100%;

  background-color: ${(p) => p.theme.palette.black};
  opacity: 0.5;

  ${(p) => p.show && 'left: 0;'}
`;

export default Backdrop;
