import styled from 'styled-components';

export const Wrap = styled.div`
  display: inline-block;

  padding: 27px;

  background: ${(p) => p.theme.palette.$latestBuysCardBg};
  border-radius: 5px;

  ${(p) => p.theme.media.max('mobile')} {
    padding: 14px;
  }
`;

export const Icon = styled.img`
  width: 56px;
  height: 56px;

  ${(p) => p.theme.media.max('mobile')} {
    width: 28px;
    height: 28px;
  }
`;
