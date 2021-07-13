import React from 'react';
import styled from 'styled-components';
import { DropdownList } from 'components/DropdownList';

const Container = styled.div`
  color: black;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <DropdownList title="123" items={['1', '2', '3']} />
    </Container>
  );
};

export default Home;
