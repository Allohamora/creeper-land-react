import React from 'react';
import Navbar from 'containers/Navbar';
import Header from 'components/Header';
import Typography from 'components/Typography';
import './Header.scss';
import Button from 'components/Button';

const MAIN_IMG_PATH = '/img/main';

const base = 'main-header';

const MainHeader: React.FC = () => (
  <Header lines>
    <Navbar />

    <div className={`${base}__content`}>
      <div className={`${base}__text`}>
        <Typography variant="h1" component="h1" color="white">
          Добро пожаловать на
          <Typography color="lime">CreeperLand!</Typography>
        </Typography>

        <Typography variant="p1" color="white">
          Сервер Minecraft, который всегда обновляется!
        </Typography>

        <div className={`${base}__ip`}>
          <Typography variant="p1" color="lime_2">
            IP:mc.creeperland.ru
          </Typography>
          <Typography variant="p2" color="lime_2">
            Версия: 1.16.2
          </Typography>
        </div>

        <Button variant="contained">
          <Typography variant="p2" color="inherit">
            Начать играть!
          </Typography>
        </Button>
      </div>
      <div>
        <img
          className={`${base}__joystick`}
          src={`${MAIN_IMG_PATH}/joystick.png`}
          alt="joystick"
        />
      </div>
    </div>
  </Header>
);

export default MainHeader;
