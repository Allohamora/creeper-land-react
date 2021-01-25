import React from 'react';
import Typography from 'components/Typography';
import HeaderUi from 'sections/Header';
import Loader from 'components/Loader';
import { icons, IconType } from 'components/Card/icons';
import { Wrap, Icon, Button, Title } from './styles';
import { BaseProps } from '../shared';

interface HeaderProps extends BaseProps {
  onButtonClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onButtonClick,
  state,
}) => {
  const { status, stateCase } = state;

  if (status === 'loading') {
    return (
      <HeaderUi lines="2">
        <Wrap loader>
          <Loader />
        </Wrap>
      </HeaderUi>
    );
  }

  const { title, icon, stock } = stateCase ?? {};

  return (
    <HeaderUi lines="2">
      <Wrap>
        <Title>
          Крутить
          {title}
        </Title>
        <Icon {...icons[icon as IconType]} />
        <Typography variant="p1" weight="500" color="lime">
          В наличии:
          {stock}
        </Typography>
        <Button onClick={onButtonClick}>
          Крутить кейс
        </Button>
      </Wrap>
    </HeaderUi>
  );
};

export default Header;
