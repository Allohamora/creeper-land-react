import React from 'react';
import Chance from 'components/Card/Chance';
import Container from 'components/Container';
import Loader from 'components/Loader';
import { Wrap, Title, Cases } from './styles';
import { BaseProps } from '../shared';

const Content: React.FC<BaseProps> = ({ state }) => {
  const content =
    state.status === 'loading' ? (
      <Loader color="black" />
    ) : (
      state.stateCase?.items.map((item, i) => (
        <Chance key={i} {...item} />
      ))
    );

  return (
    <Wrap>
      <Container>
        <Title>Содержимое кейса</Title>

        <Cases>{content}</Cases>
      </Container>
    </Wrap>
  );
};

export default Content;
