import React, { useContext } from 'react';
import Chance from 'components/Card/Chance';
import Container from 'components/Container';
import Loader from 'components/Loader';
import { Wrap, Title, Cases } from './styles';
import { CaseContext } from '../shared';

const Content: React.FC = () => {
  const { status, item } = useContext(CaseContext);

  const content =
    status === 'loading' ? (
      <Loader color="black" />
    ) : (
      item?.items.map((chance, i) => (
        <Chance key={i} {...chance} />
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
