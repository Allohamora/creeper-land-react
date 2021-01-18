export type Div = React.HtmlHTMLAttributes<HTMLElement>;
export type Button = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type Content = JSX.Element | number | string;

export interface BaseProps {
  children?: React.ReactNode;
  className?: string;
}

export type ToggleModal = () => void;
