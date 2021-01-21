import React from 'react';
import Typography from 'components/Typography';
import HeaderUi from 'sections/Header';
import { icons } from 'components/Card/icons';
import { Wrap, Icon, Button, Title } from './styles';

const Header: React.FC = () => (
  <HeaderUi lines="2">
    <Wrap>
      <Title>Крутить Кейс #1</Title>
      <Icon {...icons.case_3} />
      <Typography variant="p1" weight="500" color="lime">
        В наличии: 5
      </Typography>
      <Button>Крутить кейс</Button>
    </Wrap>
  </HeaderUi>
);

export default Header;
