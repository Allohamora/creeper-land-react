import IconButton from 'components/IconButton';
import styled from 'styled-components';

export const Content = styled.div`
  display: block;
  flex-grow: 1;
  width: 100%;
`;

export const Inner = styled.div<{ show?: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  height: 100%;
  padding: 27px 34px;
  overflow-y: auto;

  color: ${(p) => p.theme.palette.white};

  background-color: ${(p) => p.theme.palette.black};
  transform: ${(p) =>
    p.show ? 'translate(0)' : 'translate(100%)'};

  transition: ${(p) => p.theme.transtions.primary};
`;

export const XButton = styled(IconButton)`
  margin-left: auto;

  path {
    transition: ${(p) => p.theme.transtions.primary};
  }

  &:hover path {
    fill: ${(p) => p.theme.palette.lime};
  }
`;
