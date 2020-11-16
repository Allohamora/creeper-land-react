import styled, { css } from 'styled-components';
import { Button } from 'components/Button';

const NAVBAR_BREAKPOINT = '850px';
const NAVBAR_MEDIA_MAX = `@media (max-width: ${NAVBAR_BREAKPOINT})`;
const NAVBAR_MEDIA_MIN = `@media (min-width: ${NAVBAR_BREAKPOINT})`;

export const BurgerWrap = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      path {
        ${theme.transition.default}
      }

      &:hover path {
        stroke: ${theme.palette.lime};
      }
    }
  `}
`;

export const Inner = styled.div`
  display: flex;
`;

export const Root = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${Button} {
    margin-left: ${({ theme }) => theme.pxToRem(54)};
  }

  ${BurgerWrap} {
    ${NAVBAR_MEDIA_MIN} {
      display: none;
    }
  }

  ${Inner} {
    ${NAVBAR_MEDIA_MAX} {
      display: none;
    }
  }
`;
