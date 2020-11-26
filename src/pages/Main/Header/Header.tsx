import React from 'react';
import Navbar from 'containers/Navbar';
import Header from 'components/Header';
import Typography from 'components/Typography';
import Button from 'components/Button';
import { MAIN_IMG_PATH } from 'styles/vars';
import './Header.scss';

const block = 'main-header';

const MainHeader: React.FC = () => (
  <Header lines>
    <Navbar />

    <div className={`${block}__content`}>
      <div className={`${block}__text`}>
        <Typography
          variant="h1"
          component="h1"
          color="white"
        >
          Добро пожаловать на
          <Typography color="lime">CreeperLand!</Typography>
        </Typography>

        <Typography variant="p1" color="white">
          Сервер Minecraft, который всегда обновляется!
        </Typography>

        <div className={`${block}__ip`}>
          <Typography variant="p1" color="lime_2">
            IP:mc.creeperland.ru
          </Typography>
          <Typography variant="p1" color="lime_2">
            Версия: 1.16.2
          </Typography>
        </div>

        <Button
          className={`${block}__button`}
          variant="contained"
        >
          Начать играть!
        </Button>
      </div>
      <div>
        <img
          className={`${block}__joystick`}
          src={`${MAIN_IMG_PATH}/joystick.png`}
          alt="joystick"
        />
      </div>
    </div>
  </Header>
);

export default MainHeader;
