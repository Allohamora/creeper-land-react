import { Div } from 'types/props';
import { IconType } from './icons';

export interface CardProps extends Div {
  title: string;
  value: string;
  icon: IconType;
}
