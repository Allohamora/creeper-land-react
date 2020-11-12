import styled, { css } from "styled-components";

export const Logo = styled.img`
  display: block;

  ${({theme}) => css`
    width: ${theme.pxToRem(34)};
    height: ${theme.pxToRem(34)};
  `}
`;

Logo.defaultProps = {
  alt: 'creeper land',
  src: '/img/logo.png'
};
