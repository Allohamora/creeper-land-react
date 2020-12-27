import React from 'react';
import clsx from 'clsx';
import './Logo.scss';

type LogoProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const Logo: React.FC<LogoProps> = ({
  className,
  ...rest
}) => (
  <img
    className={clsx('logo', className)}
    alt="creeper land"
    src="/img/logo.png"
    {...rest}
  />
);

export default Logo;
