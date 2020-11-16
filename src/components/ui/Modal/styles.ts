import styled, { css } from 'styled-components';

interface Show {
  show?: boolean;
}

export const Content = styled.div`
  display: block;

  flex-grow: 1;
  width: 100%;
`;

export const Inner = styled.div<Show>`
  ${({ theme, show }) => css`
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 100%;
    max-width: 320px;

    z-index: 10;

    display: flex;
    flex-direction: column;

    overflow-y: auto;

    transform: translate(100%);
    ${theme.transition.default}

    background-color: ${theme.palette.black};
    padding: 27px 34px;

    ${show && 'transform: translate(0);'}
  `}
`;

export const Backdrop = styled.div<Show>`
  ${({ theme, show }) => css`
    position: fixed;
    left: 100%;
    top: 0;
    height: 100%;
    width: 100%;

    z-index: 9;

    ${theme.transition.default}

    background-color: ${theme.palette.black};
    opacity: 0.5;

    ${show &&
    css`
      left: 0;
    `}
  `}
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    display: block;
    margin-left: auto;

    path {
      ${theme.transition.default}
    }

    &:hover path {
      fill: ${theme.palette.lime};
    }
  `}
`;
