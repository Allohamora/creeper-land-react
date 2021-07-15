import React from 'react';
import { Typography } from 'components/Typography';
import { Header as HeaderUi } from 'components/Header';
import { Loader } from 'components/Loader';
import { Wrap, Icon, Button, Title } from './styles';
import { Status, Item } from '../shared';

interface HeaderProps {
  onRollButtonClick: () => void;
  onBuyButtonClick: () => void;
  status: Status;
  item: Item;
  rolls: null | string;
}

export const Header: React.FC<HeaderProps> = ({
  onRollButtonClick,
  onBuyButtonClick,
  status,
  item,
  rolls,
}) => {
  if (status === 'loading') {
    return (
      <HeaderUi lines="2">
        <Wrap loader>
          <Title>Загрузка...</Title>
          <Loader />
        </Wrap>
      </HeaderUi>
    );
  }

  const isButtonActive = status === 'wait' || status === 'ended';

  const { title, icon } = item ?? {};

  return (
    <HeaderUi lines="2">
      <Wrap>
        <Title>
          Крутить
          {` ${title}`}
        </Title>
        <Icon src={icon} />
        {rolls ? (
          <>
            <Typography variant="p1" weight="500" color="lime">
              В наличии:
              {` ${rolls}`}
            </Typography>
            <Button
              onClick={onRollButtonClick}
              disabled={!isButtonActive}
            >
              Крутить кейс
            </Button>
          </>
        ) : (
          <Button onClick={onBuyButtonClick}>Купить</Button>
        )}
      </Wrap>
    </HeaderUi>
  );
};
