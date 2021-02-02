import React from 'react';
import { icons, IconType } from 'components/Card/icons';
import {
  Backdrop,
  Wrap,
  XButton,
  BuyTitle,
  Content,
  Left,
  RightHtmlContent,
  Icon,
  Name,
  BottomForm,
  Inputs,
  Input,
  Label,
  Button,
  LabelElement,
} from './styles';

export interface BuyProps {
  icon: IconType;
  name: string;
  description: string;
  title: string;
  price: string;
  show: boolean;
  onClose: () => void;
}

const Buy: React.FC<BuyProps> = ({
  icon,
  name,
  description,
  title,
  price,
  show,
  onClose,
}) => {
  return (
    <>
      <Backdrop show={show} onClick={onClose} />
      <Wrap show={show}>
        <XButton onClick={onClose} />

        <BuyTitle>{title}</BuyTitle>
        <Content>
          <Left>
            <Icon {...icons[icon]} />
            <Name>{name}</Name>
          </Left>

          <RightHtmlContent
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </Content>
        <BottomForm>
          <Inputs>
            <LabelElement>
              <Label>Ваш ник:</Label>
              <Input placeholder="Ваш ник:" required />
            </LabelElement>

            <LabelElement>
              <Label>Промокод:</Label>
              <Input placeholder="Промокод:" />
            </LabelElement>
          </Inputs>

          <Button type="submit">{price}</Button>
        </BottomForm>
      </Wrap>
    </>
  );
};

export default Buy;
