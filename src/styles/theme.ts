const REM = 10;

const pxToRem = (px: number) => `${px / REM}rem`;

const transition = {
  default: 'transition: .5s;',
};

const media = {
  mobile: '@media (max-width: 576px)',
  tablet: '@media (max-width: 768px)',
  laptop: '@media (max-width: 992px)',
};

const font = {
  primary: "'Rubik', sans-serif",
};

const palette = {
  white: '#FFFFFF',

  black: '#2E2E2E',

  purple: '#D941FF',

  lime: '#4AD73F',
  lime_2: '#5BF74F',
  lime_3: '#52F64F',
};

export const theme = {
  pxToRem,
  media,
  font,
  palette,
  transition,
};
