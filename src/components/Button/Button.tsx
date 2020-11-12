import styled, { css } from 'styled-components';

interface ButtonProps {};

export const Button = styled.button<ButtonProps>`
  ${({theme}) => css`
    padding: 14px 52px;

    border: 2px solid ${theme.color.secondary};
    border-radius: 5px;

    font-family: ${theme.font.primary};
    font-style: normal;
    font-weight: 500;

    font-size: ${theme.pxToRem(16)};
    line-height: ${theme.pxToRem(19)};

    color: ${theme.color.primary};

    ${theme.transition.button}

    &:hover {
      color: ${theme.color.secondary};
    }
  `}
`;
