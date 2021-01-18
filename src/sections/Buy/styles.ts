import Container from 'components/Container';
import styled from 'styled-components';

export const Wrap = styled(Container)`
  padding-top: 34px;
  padding-bottom: 51px;
`;

export const Background = styled.div`
  background: ${(p) => p.theme.palette.white_2};
`;
