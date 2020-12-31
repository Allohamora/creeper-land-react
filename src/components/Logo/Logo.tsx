import React from 'react';
import { cn } from 'utils/bem';
import './Logo.scss';

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
