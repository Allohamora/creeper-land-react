import React from 'react';
import Chance from 'components/Card/Chance';
import Container from 'components/Container';
import { Wrap, Title, Cases } from './styles';

const Content: React.FC = () => {
  return (
    <Wrap>
      <Container>
        <Title>Содержимое кейса</Title>

        <Cases>
          {new Array(30).fill(null).map((_, i) => (
            <Chance
              key={i}
              title="Creeper"
              value="Шанс 25%"
              icon="creeper"
            />
          ))}
        </Cases>
      </Container>
    </Wrap>
  );
};

export default Content;
