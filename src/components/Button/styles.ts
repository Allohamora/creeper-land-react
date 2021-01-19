import styled from 'styled-components';

export const Button = styled.button`
  padding: 14px 52px;

  font-size: ${(p) => p.theme.pxToRem(16)};
  line-height: ${(p) => p.theme.pxToRem(19)};

  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  transition: ${(p) => p.theme.transtions.primary};
`;
