import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Text = styled.div`
  margin-left: ${({ theme }) => theme.pxToRem(10)};
`;
