import styled, { css } from 'styled-components';

interface ButtonProps {}

export const Button = styled.button<ButtonProps>`
  ${({ theme }) => css`
    padding: 14px 52px;

    border: 2px solid ${theme.palette.lime};
    border-radius: 5px;

    font-weight: 500;

    font-size: ${theme.pxToRem(16)};
    line-height: ${theme.pxToRem(19)};

    color: ${theme.palette.white};

    ${theme.transition.default}

    &:hover {
      color: ${theme.palette.lime};
    }
  `}
`;
