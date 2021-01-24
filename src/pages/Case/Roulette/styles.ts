import styled from 'styled-components';
import bg from 'assets/img/roulette__bg.png';
import { color, media } from 'styles/helpers';

export const Wrap = styled.div`
  position: relative;

  overflow: hidden;

  background-color: ${color('black')};
  background-image: url('${bg}');
  background-repeat: no-repeat;
  background-size: 100% 100%;

  &::after,
  &::before {
    position: absolute;
    left: 0;

    width: 100%;
    height: 4px;

    background: ${color('lime')};

    content: '';
  }

  &::after {
    top: 0;

    box-shadow: -2px -3px 6px rgba(91, 246, 79, 0.5),
      2px 3px 7px rgba(91, 246, 79, 0.5);
  }

  &::before {
    bottom: 0;

    box-shadow: -2px -3px 6px rgba(91, 246, 79, 0.5),
      2px 3px 7px rgba(91, 246, 79, 0.5);
  }
`;

export const Delimiter = styled.div`
  position: absolute;
  top: 0;
  left: 50%;

  width: 5px;
  height: 100%;

  background: ${color('lime')};
  transform: translateX(-50%);

  &::after,
  &::before {
    position: absolute;
    left: 50%;

    width: 19px;
    height: 21px;

    background: ${color('lime')};
    transform: translateX(-50%);

    content: '';

    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }

  &::after {
    top: 0;

    transform: translateX(-50%) rotate(180deg);
  }

  &::before {
    bottom: 0;
  }
`;

export const ItemsWrap = styled.div`
  padding: 52px 44px;
  overflow: hidden;

  ${media.max('mobile')} {
    padding: 33px 25px;
  }
`;

export const ItemsOverflowWrap = styled.div<{
  maxWidth?: null | number;
}>`
  margin: 0 auto;

  ${(p) => p.maxWidth && `max-width: ${p.maxWidth}px;`}
`;

export const Items = styled.div`
  display: flex;
  overflow: hidden;

  > *:not(:last-child) {
    margin-right: 10px;
  }

  ${media.max('mobile')} {
    > *:not(:last-child) {
      margin-right: 5px;
    }
  }
`;
