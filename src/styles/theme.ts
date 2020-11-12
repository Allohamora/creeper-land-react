export const REM = 10;

const pxToRem = (px: number) => `${px / REM}rem`;

const transition = {
  button: 'transition: .5s;'
};

const media = {
  mobile: '@media (max-width: 576px)',
  tablet: '@media (max-width: 768px)',
  laptop: '@media (max-width: 992px)'
};

const font = {
  primary: '\'Rubik\', sans-serif',
};

const color = {
  primary: '#FFFFFF',
  secondary: '#5BF74F'
};

export const theme = {
  pxToRem,
  media,
  font,
  color,
  transition,
};