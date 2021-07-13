import React from 'react';
import {
  CardChance,
  Rarity,
  RarityToColor,
} from 'components/Card/CardChance';
import {
  Wrap,
  Content,
  Congratulations,
  CardWrap,
  Value,
  Button,
  XButton,
  Backdrop,
} from './styles';
import { CardProps } from 'components/Card/types';

export interface ModalWinProps {
  onClose: () => void;
  show: boolean;
  rarity: Rarity;
  description: string;
  className?: string;
  card: CardProps;
}

export const ModalWin: React.FC<ModalWinProps> = ({
  show,
  onClose,
  rarity,
  className,
  card,
  description,
}) => {
  return (
    <>
      <Backdrop show={show} onClick={onClose} />

      <Wrap show={show} className={className}>
        <XButton onClick={onClose} />

        <Content color={RarityToColor[rarity]}>
          <Congratulations>ВЫ ВЫИГРАЛИ!</Congratulations>

          <CardWrap>
            <CardChance {...card} rarity={rarity} />
          </CardWrap>

          <Value color={RarityToColor[rarity]}>{description}</Value>
        </Content>

        <Button onClick={onClose}>Продолжить</Button>
      </Wrap>
    </>
  );
};
