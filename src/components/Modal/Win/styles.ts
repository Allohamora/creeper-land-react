import Typography from 'components/Typography';
import ContainedButton from 'components/Button/Contained';
import styled, { css } from 'styled-components';
import {
  color,
  media,
  opacity,
  rem,
  transition,
  zIndex,
} from 'styles/helpers';
import { ReactComponent as XButton } from 'assets/svg/x.svg';
import { Show } from 'types/modal';
import { PaletteColor } from 'styles/theme';

interface Color {
  color: PaletteColor;
}

export const Wrap = styled.div<Show>`
  position: absolute;
  top: 0;
  left: 50%;

  z-index: -1;

  width: 552px;
  height: 545px;

  padding: 33px 72px 46px 71px;

  background-color: ${color('gray')};

  border-radius: 5px;

  transform: translateX(-50%);

  opacity: 0;

  transition: ${transition('primary')};

  ${(p) =>
    p.show &&
    css`
      top: 129px;
      opacity: 1;
      z-index: ${zIndex('menu')};
    `}

  ${media.max('mobile')} {
    height: 100%;
    width: 100%;

    transform: translateX(-50%);

    padding: 60px 19px 100px;

    background-color: ${color('black')};
    border-radius: 0;

    ${(p) =>
      p.show &&
      css`
        top: 0;
      `}
  }
`;

export const Content = styled.div<Color>`
  background: radial-gradient(
    50% 50% at 50% 50%,
    ${(p) =>
        css`
          ${color(p.color)}
        `}
      0%,
    rgba(249, 64, 64, 0.02) 100%
  );
`;

export const Congratulations = styled(Typography).attrs({
  variant: 'h1',
})`
  padding-top: 43px;

  text-align: center;

  ${media.max('mobile')} {
    padding-top: 32px;
  }
`;

export const CardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 33px;

  ${media.max('mobile')} {
    padding-top: 23px;
  }
`;

export const Value = styled(Typography).attrs({
  variant: 'h1',
})<Color>`
  padding-top: 33px;
  padding-bottom: 26px;

  color: ${color('white')};
  text-align: center;

  ${media.max('mobile')} {
    padding-top: 27px;
    padding-bottom: 16px;

    color: ${(p) =>
      css`
        ${color(p.color)}
      `};
  }
`;

export const Button = styled(ContainedButton)`
  margin: 7px auto 0;
  padding: 14px 95px;

  font-weight: 500;
  font-size: ${rem(18)};
  line-height: ${rem(21)};

  ${media.max('mobile')} {
    padding: 9px 60px;

    font-size: ${rem(14)};
    line-height: ${rem(17)};
  }
`;

export const X = styled(XButton)`
  position: absolute;
  top: 34px;
  right: 29px;

  cursor: pointer;

  path {
    transition: ${transition('primary')};
  }

  &:hover path {
    fill: ${color('lime')};
  }
`;

export const Backdrop = styled.div<Show>`
  position: fixed;
  top: 100%;
  left: 0;
  z-index: ${zIndex('backdrop')};

  width: 100%;
  height: 100%;

  background-color: ${color('black')};
  opacity: ${opacity('secondary')};

  ${(p) => p.show && 'top: 0;'}
`;
