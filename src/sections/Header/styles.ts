import ContainerComponent from 'components/Container';
import lines from 'assets/img/header__lines.svg';
import lines2 from 'assets/img/header__lines_2.svg';
import styled, { css } from 'styled-components';

export interface Lines {
  lines?: '1' | '2';
}

export const Wrap = styled.header<Lines>`
  position: relative;

  padding-top: 60px;

  background-color: ${(p) => p.theme.palette.black};

  ${(p) =>
    p.lines &&
    css`
      &::after {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 1;

        width: 100%;
        height: 100%;

        background-image: url('${p.lines === '1'
          ? lines
          : lines2}');
        background-repeat: no-repeat;
        background-size: 100%
          ${p.lines === '1' ? '100%' : '105%'};
        transform: translate(-50%, -50%);

        content: '';
      }

      ${p.theme.media.max('pc')} {
        &::after {
          background-image: none;
        }
      }
    `}

  ${(p) => p.theme.media.max('mobile')} {
    padding-top: 33px;
  }
`;

export const Container = styled(ContainerComponent)`
  position: relative;
  z-index: 2;
`;
