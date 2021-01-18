import styled, { css } from 'styled-components';
import { Modal } from '../shared';

export const Wrap = styled.div<{ modal?: Modal }>`
  display: flex;

  > *:not(:first-child) {
    margin-left: ${(p) => (p.modal ? '0' : '31px')};
  }

  ${(p) =>
    p.modal &&
    css`
      flex-flow: column;

      > *:not(:last-child) {
        margin-bottom: 10px;
      }
    `}
`;

export const LinkWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkText = styled.p`

  margin: 0;
  padding: 0;

  color: ${(p) => p.theme.palette.white};
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  transition: ${(p) => p.theme.transtions.primary};

  &:hover {
    color: ${(p) => p.theme.palette.lime};
  }
`;
