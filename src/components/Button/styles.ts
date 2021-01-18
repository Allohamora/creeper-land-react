import styled from 'styled-components';

const Button = styled.button`
  padding: 14px 52px;

  font-size: ${(p) => p.theme.pxToRem(16)};
  line-height: ${(p) => p.theme.pxToRem(19)};

  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  transition: ${(p) => p.theme.transtions.primary};
`;

export const OutlinedButton = styled(Button)`
  color: ${(p) => p.theme.palette.white};

  background-color: transparent;
  border: 2px solid ${(p) => p.theme.palette.lime};

  &:hover {
    color: ${(p) => p.theme.palette.lime};
  }
`;

export const ContainedButton = styled(Button)`
  color: ${(p) => p.theme.palette.white};

  background-color: ${(p) => p.theme.palette.lime};

  &:hover {
    color: ${(p) => p.theme.palette.black};
  }
`;
