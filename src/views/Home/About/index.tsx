import React from 'react';
import { Advantages } from './Advantages';
import { Chart } from 'components/Chart';
import { Top } from './Top';
import { Wrap, Container } from './styles';

export const About: React.FC = () => (
  <Wrap>
    <Container>
      <Top />
      <Chart />
      <Advantages />
    </Container>
  </Wrap>
);
