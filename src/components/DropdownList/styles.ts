import styled from 'styled-components';
import { ReactComponent as VRaw } from 'assets/svg/V.svg';

export const Wrap = styled.div`
  overflow: hidden;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 18px 41px 18px 29px;

  text-align: left;

  background-color: ${(p) => p.theme.palette.black};

  transition: ${(p) => p.theme.transtions.primary};

  &:hover {
    background-color: ${(p) => p.theme.palette.gray};
  }

  ${(p) => p.theme.media.max('mobile')} {
    padding: 16px 30px 17px 8px;
  }
`;

export const V = styled(VRaw)<{ $active?: boolean }>`
  flex-shrink: 0;

  align-self: center;
  width: 18px;
  height: 10px;
  margin-left: 23px;

  transition: ${(p) => p.theme.transtions.primary};

  ${(p) => p.$active && 'transform: rotate(180deg);'}

  ${(p) => p.theme.media.max('mobile')} {
    width: 12px;
    height: 8px;
  }
`;

export const List = styled.div`
  background-color: ${(p) => p.theme.palette.white_3};

  transition: ${(p) => p.theme.transtions.primary};
`;

export const Item = styled.li`
  position: relative;

  display: flex;

  &:not(:last-child) {
    margin-bottom: 23px;
  }

  &::before {
    display: inline-block;

    flex-shrink: 0;
    width: 8px;
    height: 8px;

    margin-right: 10px;

    background-color: ${(p) => p.theme.palette.black};
    transform: rotate(45deg);
    transform-origin: 0 100%;

    content: '';
  }
`;

export const Items = styled.ul`
  padding: 19px 83px 49px 34px;

  ${(p) => p.theme.media.max('mobile')} {
    padding: 13px 17px 27px 10px;
  }
`;
