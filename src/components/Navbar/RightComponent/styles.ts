import styled, { css } from 'styled-components';
import { Button } from 'components/Button';
import { Normal } from 'components/ui/Text';

export const Right = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${Button} {
    margin-left: ${({ theme }) => theme.pxToRem(54)}
  }
`;

export const List = styled.ul`
  display: flex;

  & > *:not(:first-child) {
    margin-left: ${({ theme }) => theme.pxToRem(31)};
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    a ${Normal} {
      color: ${theme.color.primary};

      ${theme.transition.button}

      &:hover {
        color: ${theme.color.secondary};
      }
    }
  `}
`;

export const Icons = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    margin-left: ${theme.pxToRem(27)};

    & > a {
      display: flex;

      &:hover path {
        ${theme.transition.button}

        fill: ${theme.color.secondary};
      }

      &:hover path {
        fill: ${theme.color.primary};
      }

      &:not(:first-child) {
        margin-left: ${theme.pxToRem(17)};
      }
    }
  `}
`;
