import styled from 'styled-components';
import { Modal } from '../shared';

export const Wrap = styled.div<{ modal?: Modal }>`
  display: flex;
  align-items: center;
  margin-left: ${(p) => (p.modal ? '0' : '27px')};
`;

export const Icon = styled.a`
  display: flex;

  path {
    transition: ${(p) => p.theme.transtions.primary};

    fill: ${(p) => p.theme.palette.lime};
  }

  &:hover path {
    fill: ${(p) => p.theme.palette.white};
  }

  &:not(:first-child) {
    margin-left: 17px;
  }
`;
