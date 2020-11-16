import styled, { css } from 'styled-components';

interface TextProps {
  weight?: boolean,
  primary?: boolean
}

export const Text = styled.p<TextProps>`
  ${({ theme, weight, primary }) => css`
    margin: 0;
    padding: 0;

    font-family: ${theme.font.primary};
    font-style: normal;
    font-weight: ${weight ? '500' : 'normal'};

    color: ${theme.palette.white};
    
    ${primary && `color: ${theme.palette.lime};`}
  `}
`;

export const Normal = styled(Text)`
  ${({ theme }) => css`
    font-size: ${theme.pxToRem(16)};
    line-height: ${theme.pxToRem(19)};

    ${theme.media.mobile} {
      font-size: ${theme.pxToRem(14)};
      line-height: ${theme.pxToRem(17)};
    }
  `}
`;

export const Big = styled(Normal)`
  ${({ theme }) => css`
    font-size: ${theme.pxToRem(18)};
    line-height: ${theme.pxToRem(21)};
  `}
`;

export const Small = styled(Text)`
  ${({ theme }) => css`
    font-size: ${theme.pxToRem(14)};
    line-height: ${theme.pxToRem(17)};

    ${theme.media.mobile} {
      font-size: ${theme.pxToRem(11)};
      line-height: ${theme.pxToRem(14)};
    }
  `}
`;
