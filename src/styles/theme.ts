const breakpoints = {
  mobile: '576px',
  tablet: '768px',
  laptop: '992px',
  pc: '1250px',
  $navbar: '850px',
};

export type Breakpoint = keyof typeof breakpoints;

const ROOT_FS = 10;

const palette = {
  white: '#fff',
  white_2: '#f8f9fa',
  white_3: '#e7e8e9',

  black: '#2e2e2e',

  gray: '#454545',

  purple: '#d941ff',

  lime: '#4ad73f',
  lime_2: '#5bf74f',
  lime_3: '#52f64f',

  green: '#355635',

  $latestBuysCardBg: 'rgba(57, 57, 57, 0.5)',
  $aboutShadow: 'rgba(0, 0, 0, 0.25)',
};

export type PaletteColor = keyof typeof palette;

const fonts = {
  primary: "'Rubik', sans-serif",
};

const transtions = {
  primary: '0.5s',
};

const theme = {
  ROOT_FS,
  breakpoints,
  palette,
  fonts,
  transtions,

  pxToRem: (px: number): string => `${px / ROOT_FS}rem`,
  media: {
    max: (breakpoint: Breakpoint): string =>
      `@media (max-width: ${breakpoints[breakpoint]})`,
    min: (breakpoint: Breakpoint): string =>
      `@media (min-width: ${breakpoints[breakpoint]})`,
  },
};

export default theme;
