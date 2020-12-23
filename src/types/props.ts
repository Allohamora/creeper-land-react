export type DivProps = React.HtmlHTMLAttributes<HTMLElement>;
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type Content = JSX.Element | number | string;

export interface BaseProps {
  children?: React.ReactNode;
  className?: string;
}

export type ToggleModal = () => void;
