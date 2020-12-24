import Typography from 'components/Typography';
import React from 'react';
import shopCasesMock from 'mock/shopCases.json';
import Case from './Case';
import { IconType } from './Case/Case';
import './Cases.scss';

const block = 'main-shop-cases';

const Cases: React.FC = () => {
  return (
    <div className={block}>
      <Typography
        variant="h2"
        color="black"
        className={`${block}__title`}
      >
        Кейсы
      </Typography>

      <div className={`${block}__items`}>
        {shopCasesMock.map(({ icon, ...rest }, i) => (
          <Case key={i} icon={icon as IconType} {...rest} />
        ))}
      </div>
    </div>
  );
};

export default Cases;
