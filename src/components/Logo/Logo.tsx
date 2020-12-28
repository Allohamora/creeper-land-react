import React from 'react';
import './Logo.scss';
import { cn } from 'utils/bem';

type LogoProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const logo = cn('Logo');

const Logo: React.FC<LogoProps> = ({
  className,
  ...rest
}) => (
  <img
    className={logo(null, [className])}
    alt="creeper land"
    src="/img/logo.png"
    {...rest}
  />
);

export default Logo;
