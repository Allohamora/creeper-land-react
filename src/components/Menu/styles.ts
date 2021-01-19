import IconButton from 'components/IconButton';
import styled from 'styled-components';
import { color, transition, zIndex } from 'styles/helpers';

export const Content = styled.div`
  display: block;
  flex-grow: 1;
  width: 100%;
`;

export const Inner = styled.div<{ show?: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${zIndex('menu')};

  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  height: 100%;
  padding: 27px 34px;
  overflow-y: auto;

  color: ${color('white')};

  background-color: ${color('black')};
  transform: ${(p) =>
    p.show ? 'translate(0)' : 'translate(100%)'};

  transition: ${transition('primary')};
`;

export const XButton = styled(IconButton)`
  margin-left: auto;

  path {
    transition: ${transition('primary')};
  }

  &:hover path {
    fill: ${color('lime')};
  }
`;
