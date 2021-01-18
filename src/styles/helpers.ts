import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

interface FontSize {
  fs: number;
  ln: number;
  mfs: number;
  mln: number;

  rem?: boolean;
}

const pxOrRem = (toRem: boolean, px: number) => (
  p: ThemeProps<DefaultTheme>,
): string | number => (toRem ? p.theme.pxToRem(px) : px);

export const fontSize = ({
  fs,
  ln,
  mfs,
  mln,
  rem = true,
}: FontSize): FlattenInterpolation<
  ThemeProps<DefaultTheme>
> => css`
  font-size: ${pxOrRem(rem, fs)};
  line-height: ${pxOrRem(rem, ln)};

  ${(p) => p.theme.media.max('mobile')} {
    font-size: ${pxOrRem(rem, mfs)};
    line-height: ${pxOrRem(rem, mln)};
  }
`;
