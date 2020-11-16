import styled, { css } from 'styled-components';
import { Modal } from 'types/navbar';

export const Icons = styled.div<{modal?: Modal}>`
  ${({ theme, modal }) => css`
    display: flex;
    align-items: center;

    ${!modal && `margin-left: ${theme.pxToRem(27)};`}

    & > a {
      display: flex;

      &:hover path {
        ${theme.transition.default}

        fill: ${theme.palette.lime};
      }

      &:hover path {
        fill: ${theme.palette.white};
      }

      &:not(:first-child) {
        margin-left: ${theme.pxToRem(17)};
      }
    }
  `}
`;
