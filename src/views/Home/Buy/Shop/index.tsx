import React, { useState } from 'react';
import shopBlockTabsMock from 'mock/shopBlock.json';
import { Tabs } from 'components/Tabs';
import { Title } from '../Title';
import { CardShop as Card } from 'components/Card/CardShop';
import { ModalBuy } from 'components/Modal/ModalBuy';
import { Tab } from './styles';

interface CardObj {
  id: string;
  icon: string;
  title: string;
  value: string;
  description: string;
}

export const Shop: React.FC = () => {
  const tabs = shopBlockTabsMock as CardObj[][];

  const [show, setShow] = useState(false);
  const [active, setActive] = useState<CardObj>(tabs[0][0]);

  const tabsButtons = ['Привилегии', 'Кейсы', 'Разбан'];

  const cardClickHandler =
    (tabIndex: number, index: number) => () => {
      const finded = tabs[tabIndex][index];

      setActive(finded);
      setShow(true);

      window.scrollTo(0, 0);
    };

  const tabsContent = tabs.map((arr, tabIndex) => (
    <Tab key={tabIndex}>
      {arr.map(({ icon, ...rest }, i) => (
        <Card
          key={i}
          icon={icon}
          {...rest}
          onClick={cardClickHandler(tabIndex, i)}
        />
      ))}
    </Tab>
  ));

  const closeModalHandler = () => {
    setShow(false);
  };

  const onModalSuccess = (body: {
    nickname: string;
    promo: string | null;
  }) => {
    console.log(body);
    closeModalHandler();
  };

  return (
    <div>
      <Title type="shop">Магазин</Title>

      <Tabs tabs={tabsButtons} content={tabsContent} />

      {active && (
        <ModalBuy
          show={show}
          onClose={closeModalHandler}
          onSuccess={onModalSuccess}
          title="Купить привилегию"
          price={active.value}
          name={active.title}
          description={active.description}
          icon={active.icon}
        />
      )}
    </div>
  );
};
