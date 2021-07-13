import XButton from 'assets/icons/x.svg';
import styled, { css } from 'styled-components';
import { Show } from './types';
import {
  zIndex,
  color,
  transition,
  opacity,
  media,
} from 'styles/helpers';

export const TopWrap = styled.div<Show>`
  position: absolute;
  top: 0;
  left: 50%;

  z-index: -1;

  border-radius: 5px;

  transform: translateX(-50%);

  opacity: 0;

  transition: all ${transition('primary')}, z-index 0s;

  ${(p) =>
    p.show &&
    css`
      top: 129px;
      opacity: 1;
      z-index: ${zIndex('menu')};
    `}

  ${media.max('mobile')} {
    width: 100%;
    min-height: 100%;

    border-radius: 0;

    transform: translateX(-50%);

    ${(p) =>
      p.show &&
      css`
        top: 0;
      `}
  }
`;

export const X = styled(XButton)`
  cursor: pointer;

  path {
    transition: ${transition('primary')};
  }

  &:hover path {
    fill: ${color('lime')};
  }
`;

export const TopBackdrop = styled.div<Show>`
  position: fixed;
  top: 100%;
  left: 0;
  z-index: -1;

  width: 100%;
  height: 100%;

  opacity: ${opacity('secondary')};

  ${(p) =>
    p.show &&
    css`
      top: 0;
      z-index: ${zIndex('backdrop')};
    `}
`;
