import React from 'react';
import styled from 'styled-components';
import { DivProps } from 'types';

export const Container = styled.div`
  max-width: 934px;

  margin-left: auto;
  margin-right: auto;

  @media (max-width: 958px) {
    max-width: 100%;
    width: 100%;

    padding-right: 24px;
    padding-left: 24px;
  }
`;

const ContainerWrap = styled.div``;

export const ContainerWithWrap = ({ children, ...rest }: DivProps) => (
  <ContainerWrap {...rest}>
    <Container>
      {children}
    </Container>
  </ContainerWrap>
);
