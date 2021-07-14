import React from 'react';
import { Wrap, Icon, Text } from './styles';

interface CardPeopleProps {
  variant?: 'green' | 'white';
  text: string;
  className?: string;
}

export const CardPeople: React.FC<CardPeopleProps> = ({
  variant = 'green',
  text,
  className,
}) => {
  return (
    <Wrap className={className}>
      <Icon variant={variant} />
      <Text variant={variant}>{text}</Text>
    </Wrap>
  );
};
