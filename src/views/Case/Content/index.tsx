import React from 'react';
import { CardChance } from 'components/Card/CardChance';
import { Container } from 'components/Container';
import { Loader } from 'components/Loader';
import { Wrap, Title, Cases } from './styles';
import { Status, Item } from '../shared';

interface ContentProps {
  status: Status;
  item: Item;
}

export const Content: React.FC<ContentProps> = ({ status, item }) => {
  const content =
    status === 'loading' ? (
      <Loader color="black" />
    ) : (
      item?.items.map((chance, i) => (
        <CardChance key={i} {...chance} />
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
