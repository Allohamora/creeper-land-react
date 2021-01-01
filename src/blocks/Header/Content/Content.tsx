import React from 'react';
import Typography from 'components/Typography';
import Button from 'components/Button';
import { HEADER_IMG_PATH } from 'styles/vars';
import { header } from '../shared';

const Content: React.FC = () => (
  <div className={header('content')}>
    <div className={header('text')}>
      <Typography
        variant="h1"
        component="h1"
        color="white"
        className={header('wellcome')}
      >
        Добро пожаловать на
        <Typography color="lime">CreeperLand!</Typography>
      </Typography>

      <Typography
        variant="p1"
        color="white"
        className={header('description')}
      >
        Сервер Minecraft, который всегда обновляется!
      </Typography>

      <div className={header('data')}>
        <Typography
          variant="p1"
          color="lime_2"
          className={header('ip')}
        >
          IP: mc.creeperland.ru
        </Typography>

        <Typography
          variant="p1"
          color="lime_2"
          className={header('version')}
        >
          Версия: 1.16.2
        </Typography>
      </div>

      <Button
        className={header('button')}
        variant="contained"
      >
        Начать играть!
      </Button>
    </div>
    <div>
      <img
        className={header('joystick')}
        src={`${HEADER_IMG_PATH}/joystick.png`}
        alt="joystick"
      />
    </div>
  </div>
);

export default Content;
