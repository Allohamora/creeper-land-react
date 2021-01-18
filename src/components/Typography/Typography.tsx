import React from 'react';
import { fontSize } from 'styles/helpers';
import { PaletteColor } from 'styles/theme';
import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

const header = (
  content: FlattenInterpolation<ThemeProps<DefaultTheme>>,
) => css`
  font-weight: 500;
  ${content}
`;

interface TypoProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p1' | 'p2' | 'p3';
  color?: PaletteColor;
  weight?: 'normal' | '400' | '500' | 'bold' | '700';
}

const Typo = styled.p<TypoProps>`
  margin: 0;
  padding: 0;

  color: ${(p) =>
    p.color
      ? p.theme.palette[p.color]
      : p.theme.palette.black};
  font-weight: ${(p) => p.weight ?? 'normal'};
  font-size: inherit;
  /* stylelint-disable-next-line */
  font-family: ${(p) => p.theme.fonts.primary};
  font-style: normal;
  line-height: inherit;

  ${
    // eslint-disable-next-line consistent-return,
    (p) => {
      // eslint-disable-next-line default-case
      switch (p.variant) {
        case 'h1':
          return header(
            fontSize({ fs: 36, ln: 43, mfs: 22, mln: 26 }),
          );
        case 'h2':
          return header(
            fontSize({ fs: 28, ln: 33, mfs: 16, mln: 19 }),
          );
        case 'h3':
          return header(
            fontSize({ fs: 24, ln: 28, mfs: 14, mln: 17 }),
          );
        case 'h4':
          return header(
            fontSize({ fs: 16, ln: 19, mfs: 14, mln: 17 }),
          );
        case 'p1':
          return fontSize({
            fs: 18,
            ln: 21,
            mfs: 14,
            mln: 17,
          });
        case 'p2':
          return fontSize({
            fs: 16,
            ln: 19,
            mfs: 14,
            mln: 17,
          });
        case 'p3':
          return fontSize({
            fs: 14,
            ln: 17,
            mfs: 11,
            mln: 14,
          });
      }
    }
  }
`;

export interface TypographyProps extends TypoProps {
  component?: React.ElementType;
}

const Typography: React.FC<TypographyProps> = ({
  component = 'p',
  ...rest
}) => <Typo as={component} {...rest} />;

export const Paragraph = Typography;

export default Typography;
