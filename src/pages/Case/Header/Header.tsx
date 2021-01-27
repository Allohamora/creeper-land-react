import React, { useContext } from 'react';
import Typography from 'components/Typography';
import HeaderUi from 'sections/Header';
import Loader from 'components/Loader';
import { icons, IconType } from 'components/Card/icons';
import { Wrap, Icon, Button, Title } from './styles';
import { CaseContext } from '../shared';

interface HeaderProps {
  onButtonClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onButtonClick,
}) => {
  const { status, item } = useContext(CaseContext);

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

  const isButtonActive =
    status === 'wait' || status === 'ended';

  const { title, icon, stock } = item ?? {};

  return (
    <HeaderUi lines="2">
      <Wrap>
        <Title>
          Крутить
          {` ${title}`}
        </Title>
        <Icon {...icons[icon as IconType]} />
        <Typography variant="p1" weight="500" color="lime">
          В наличии:
          {` ${stock}`}
        </Typography>
        <Button
          onClick={onButtonClick}
          disabled={!isButtonActive}
        >
          Крутить кейс
        </Button>
      </Wrap>
    </HeaderUi>
  );
};

export default Header;
