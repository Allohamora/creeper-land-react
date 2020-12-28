import { cn } from 'utils/bem';

interface LinkType {
  to: string;
  text: string;
}

export type LinksType = LinkType[];

interface IconType {
  href: string;
  icon: JSX.Element;
}
export type IconsType = IconType[];

export type Modal = boolean;

export const navbar = cn('Navbar');
