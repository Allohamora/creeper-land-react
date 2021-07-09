import { DefaultTheme, ThemeProps } from 'styled-components';

export type DivAttributes = React.HtmlHTMLAttributes<HTMLElement>;
export type ButtonAttributes =
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export type StyledProps = ThemeProps<DefaultTheme>;
