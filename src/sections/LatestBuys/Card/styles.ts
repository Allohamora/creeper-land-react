import styled from 'styled-components';
import { color, media } from 'styles/helpers';

export const Wrap = styled.div`
  display: inline-block;

  padding: 27px;

  background: ${color('$latestBuysCardBg')};
  border-radius: 5px;

  ${media.max('mobile')} {
    padding: 14px;
  }
`;

export const Icon = styled.img`
  width: 56px;
  height: 56px;

  ${media.max('mobile')} {
    width: 28px;
    height: 28px;
  }
`;
