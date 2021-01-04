import React from 'react';
import Typography from 'components/Typography';
import PeopleCard from 'components/PeopleCard';
import { about } from '../shared';

const Top: React.FC = () => {
  return (
    <div className={about('top')}>
      <div className={about('left')}>
        <Typography
          variant="h2"
          color="white"
          weight="500"
          className={about('left-title')}
        >
          О сервере
        </Typography>

        <Typography variant="p2" color="white">
          Сервер Minecraft на всегда новой версии, на данный
          момент - 1.16.2 Всё сделано для комфортной игры и
          без имбалансных донатов, которые ломают всю
          систему. Стоит на отличном выделенном сервере.
          Много игровых режимов на любой вкус.
        </Typography>

        <div className={about('ip')}>
          <Typography variant="p1" color="lime_3">
            Версия: 1.16.2
          </Typography>
          <Typography variant="p1" color="lime_3">
            IP: mc.creeperland.ru
          </Typography>
        </div>
      </div>

      <div className={about('right')}>
        <PeopleCard
          className={about('right-card')}
          variant="white"
          text="Рекорд: 345"
        />
        <PeopleCard
          className={about('right-card')}
          variant="green"
          text="Онлайн: 234"
        />
      </div>
    </div>
  );
};

export default Top;
