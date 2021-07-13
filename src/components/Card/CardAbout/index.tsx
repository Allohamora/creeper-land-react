import Gamepad from 'assets/svg/gamepad.svg';
import People from 'assets/svg/people.svg';
import King from 'assets/svg/king.svg';
import Server from 'assets/svg/server.svg';
import { IconWrap, Title, Wrap } from './styles';

const icons = {
  gamepad: Gamepad,
  people: People,
  king: King,
  server: Server,
};

export type IconType = keyof typeof icons;

export interface CardAboutProps {
  title: string;
  icon: IconType;
}

export const CardAbout: React.FC<CardAboutProps> = ({
  title,
  icon,
}) => {
  const Icon = icons[icon];

  return (
    <Wrap>
      <IconWrap>
        <Icon />
      </IconWrap>

      <Title>{title}</Title>
    </Wrap>
  );
};
