import styled, { css } from 'styled-components';
import { Normal } from 'components/ui/Text';
import { Modal } from 'types/navbar';

export const List = styled.ul<{ modal?: Modal }>`
  ${({ theme, modal }) => css`
    display: flex;

    ${modal
      ? css`
          flex-flow: column;

          > *:not(:last-child) {
            margin-bottom: ${theme.pxToRem(10)};
          }
        `
      : css`
          & > *:not(:first-child) {
            margin-left: ${theme.pxToRem(31)};
          }
        `}
  `}
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    a ${Normal} {
      color: ${theme.palette.white};

      ${theme.transition.default}

      &:hover {
        color: ${theme.palette.lime};
      }
    }
  `}
`;
