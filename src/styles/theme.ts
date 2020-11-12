export const REM = 18;

const pxToRem = (px: number) => `${px / REM}rem`;

const media = {
  mobile: '@media (max-width: 576px)',
  tablet: '@media (max-width: 768px)',
  laptop: '@media (max-width: 992px)'
};

export const theme = {
  pxToRem,
  media,
};