import React from 'react';
import Typography from 'components/Typography';
import clsx from 'clsx';
import { ReactComponent as PeopleRounded } from 'assets/people-rounded.svg';
import './Top.scss';

const block = 'main-about-top';
const Top: React.FC = () => {
  return (
    <div className={block}>
      <div className={`${block}__left`}>
        <Typography
          variant="h2"
          color="white"
          weight="500"
          className={`${block}__left-title`}
        >
          О сервере
        </Typography>

        <Typography
          variant="p2"
          color="white"
          className={`${block}__left-text`}
        >
          Сервер Minecraft на всегда новой версии, на данный
          момент - 1.16.2 Всё сделано для комфортной игры и
          без имбалансных донатов, которые ломают всю
          систему. Стоит на отличном выделенном сервере.
          Много игровых режимов на любой вкус.
        </Typography>

        <div className={`${block}__left-ip`}>
          <Typography variant="p1" color="lime_3">
            Версия: 1.16.2
          </Typography>
          <Typography variant="p1" color="lime_3">
            IP: mc.creeperland.ru
          </Typography>
        </div>
      </div>

      <div className={`${block}__right`}>
        <div className={`${block}__right-item`}>
          <PeopleRounded
            className={clsx(
              `${block}__right-icon`,
              `${block}__right-icon-white`,
            )}
          />
          <p
            className={clsx(
              `${block}__right-text`,
              `${block}__right-text-white`,
            )}
          >
            Рекорд: 345
          </p>
        </div>
        <div className={`${block}__right-item`}>
          <PeopleRounded
            className={clsx(
              `${block}__right-icon`,
              `${block}__right-icon-green`,
            )}
          />
          <p
            className={clsx(
              `${block}__right-text`,
              `${block}__right-text-green`,
            )}
          >
            Онлайн: 234
          </p>
        </div>
      </div>
    </div>
  );
};

export default Top;
