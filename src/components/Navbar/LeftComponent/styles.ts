import styled from 'styled-components';

export const Left = styled.div`
  display: flex;
`;

export const LeftText = styled.div`
  margin-left: ${({theme}) => theme.pxToRem(10)};
`;