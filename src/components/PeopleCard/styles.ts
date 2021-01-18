import styled, { css } from 'styled-components';
import { ReactComponent as PeopleRounded } from 'assets/svg/people-rounded.svg';

export const Wrap = styled.div`
  ${(p) => p.theme.media.max('mobile')} {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }
`;

interface Variant {
  variant: 'white' | 'green';
}

export const Icon = styled(PeopleRounded)<Variant>`
  width: 81px;
  height: 81px;

  ${(p) =>
    p.variant === 'white' &&
    css`
      path {
        fill: ${p.theme.palette.white};
      }

      circle {
        fill: ${p.theme.palette.gray};
        stroke: ${p.theme.palette.white};
      }
    `}

  ${(p) =>
    p.variant === 'green' &&
    css`
      path {
        fill: ${p.theme.palette.lime_3};
      }

      circle {
        fill: ${p.theme.palette.green};
        stroke: ${p.theme.palette.lime_3};
      }
    `}

  ${(p) => p.theme.media.max('mobile')} {
    width: 54px;
    height: 54px;
  }
`;

export const Text = styled.p<Variant>`
  margin: 0;
  padding: 9px 0 0;

  color: ${(p) =>
    p.variant === 'white'
      ? p.theme.palette.white
      : p.theme.palette.lime_3};
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;
